# The Newsletter end-to-end Workflow

From Content Creation to email receipt

## Creating a Newsletter in Contentful

For creating a Newsletter in Contentful we start for adding a Newsletter type entry in the Contentful Content tab, however is highly recommended to clone an existing Newsletter entry in order to avoid mismatching tags that could prevent the Newsletter workflow to be executed as expected, which is explained in the following paragraphs.

The Newsletter model holds the needed values for adding the proper content in order to create in the Next server the email to be sent based on the template and the entry info.

Each of the fields holds a helper text to guide the content creator at the time of adding the content to the entry, however we describe it in this guide as well:

*   Cover Image (`coverImg`) : The main image appearing on top of the newsletter. It does not contain the background patron image.
*   Cover Background Image (`coverBackgroundImg`) : The background pattern of the cover image.
*   Cover Header (`coverHeader`) : The header shown over the cover image.
*   Cover Message (`coverMessage`) : The text shown over the cover image.
*   Title (`title`) : The title shown below the main image, as the starting title of the email body.
*   Paragraph Top (`paragraphTop`) : First paragraph content show on top, after email title.
*   Button Top (`buttonTop`) : The first button shown, after the paragraph top.
*   Paragraph Bottom (`paragraphBottom`) : Second paragraph content shown after first button.
*   Button Bottom (`buttonBottom`) : The second button shown, after the paragraph bottom.
*   Footer Image (`footerImg`) : The image shown at the end of the email body, before the social media buttons.

## Types of Newsletter:

### The `welcomeEmail` tagged entry

Intended to be the content sent when a new user is subscribed to our Newsletters. It should exists as an unique entry, meaning there should be only one `welcomeEmail` entry in our Contentful workspace. This entry can be safely edited as needed but its updated content only will be received for the users that subscribe after the update (and corresponding publishing) of this entry. Receiving the `welcomeEmail` and subsequent published Newsletter will be explained forwarding.

### The `emailNewsletter` tagged entry

This entries are the ones who will be sent by the server and received by the subscribed user once they get published.

This tag serves as a validation for the workflow process involved functions that runs on the server.

Omitting this tag, or duplicating the Newsletter entry by using as base entry the one tagged as `welcomeEmail` would prevent the workflow to complete.

## A sample Newsletter entry

Explore a newsletter example in this [entry](https://app.contentful.com/spaces/w8n97mj303nk/environments/features/entries/4U4Dae0LKQTBlaMwJcaZMy) matching the [figma](https://www.figma.com/file/epHXucNHjke2rES69iOsaS/%F0%9F%98%8ETetraImpacts?type=design&node-id=7302-31046&t=b88vrNMR0BCVZmEW-4) design. Please take into account that this design corresponds rather to our welcome email than to a newsletter email, however, the entry fields are the same, only the tag changes, as explained.

## The publishing/sending workflow

The Newsletter email sending workflow is based on the use of a Contentful webhook and a Next API endpoint in our Web App.

### Triggering the workflow

When a new Newsletter is published, an specific webhook designed for triggering in this condition make a POST request against our **createNewsletter** API endpoint, sending in the request body, a payload containing the `spaceId` , `environmentID`, `contentType`, `entryID` and `version` of the recently published entry.

### Entry processing

On the server, when a request hits the mentioned API, the request body is validated against the expected values of the payload, allowing us for instance:

*   to avoid a Newsletter from the `features` environment be sent to the subscribed users of our production environment
*   to avoid resending an updated version of the `welcomeEmail` to all the already subscribed users.

Once we make sure we received the proper payload in the request, the list of subscribed users is retrieved from Firebase. Using the specified ID of the Newsletter entry, we retrieve its data (entry fields) from Contentful and we check we are not sending a welcome email instead of a newsletter.

Then we make an internal request to get the **/newsletter** page, passing as args the entry values so it can generate the static Newsletter page and returning it's html, to be used in the email body.

The list of subscribed user is then iterated, so for each user in our subscription list:

*   the HTML is injected with the user name and email to customize the email body

*   a promise attempting to send the email to the user is added to a predefined Promises array.

Once finished the iteration across the subscribed users list, we attempt to send all the emails by awaiting all the sending operations (in the promises array) to be completed. We examine the result of the promises array created with this intention so we can determine whether a user in our subscription list has been sent the email to, or the email sending process has failed for an specific user (currently we are looking forward to improve this step by implementing a pool and better managing the possible errors that could arise from this step, however, it's not being handled at the current time).

## Getting subscribed for our Newsletter

There are 3 main ways of getting subscribed to the Tetraimpacts' Newsletter:

### The unknown visitor:

When a not logged in visitor reaches our page, at the 7th second (this number was set for getting some luck 😅) after the page loads, we check whether a cookie with the `SUBSCRIPTION_OFFERED` exists or not in the Local Storage of the visitor's browser. If it doesn't, we launch the subscription modal with name and email form and we set the value of the cookie to true (this value expires after a week, guess what, 7 days 😅). If this form is submitted, we firstly check that the email used is not already on our subscription list, if it does, we show a Notification toast telling the user he is already subscribed, otherwise, we attempt to add it to our subscription list on Firebase, then send him the welcome Email. From that moment, every time a Newsletter is published on Contentful, the user will receive an email with its content, as described earlier.

### The logged in user:

When a user get's logged in, we verify on Firebase using it's email, if he already belongs to the subscription list. In case he doesn't, we launch a subscription modal of confirmation asking if he wants to subscribe to our Newsletter, and we set the previously mentioned cookie to true as well, since we offered him to get subscribed. In case the user accepts, we attempt to add the user to our subscription list on Firebase and we send him our welcome email. From that moment, every time a Newsletter entry is published on Contentful, the user receives an email as described earlier.

### The Subscribe Buttons:

At the Footer and Drawer (mobile only) components, we show a Subscribe button that triggers the same processes described before depending if is an unknown or logged in user, but ignoring the cookie value, since the subscription was manually requested.
