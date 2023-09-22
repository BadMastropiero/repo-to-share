
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel,
ESLint, etc) right into your project so you have full control over them. All of the commands except
`eject` will still work, but they will point to the copied scripts so you can tweak them. At this
point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle
deployments, and you shouldn’t feel obligated to use this feature. However we understand that this
tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# How to use

## Install step

Install the lib in desired project:

- Via `yalc`: `yalc publish` in the root of this repo, `yalc add tetraimpacts-components-library` in desired project

Use imported components inside a theme context:

```tsx
import {ThemeProvider} from 'styled-components';
import {Checkbox, styledDefaultTheme} from 'tetraimpacts-components-library';

export default function Test() {
  return (
      <main>
        <ThemeProvider theme={styledDefaultTheme}>
          <Checkbox checked />
        </ThemeProvider>
      </main>
  );
}
```

It is recommended to use alongside `styled-components` and `typescript`. 

Alternatively, use the shorthand script `bootstrap:yalc-usage`

### SSR

If used with SSR, extra [steps](https://styled-components.com/docs/advanced#server-side-rendering) are needed. Here is an example of its use along [NextJs](https://nextjs.org/docs/advanced-features/custom-document#customizing-renderpage):

```tsx
// app/_document.tsx
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document';
import { ServerStyleSheet } from 'styled-components';


class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
  
    try {
      // Run the React rendering logic synchronously
      ctx.renderPage = () =>
        originalRenderPage({
          // Useful for wrapping the whole react tree
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
          // Useful for wrapping in a per-page basis
          enhanceComponent: (Component) => Component,
        })
  
      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx)
  
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
            {...}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

# Tetraimpacts-Components-Library

## Coding Style

The library uses [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/) , and enforces it using `eslint`, utility `prettier` libs, and git pre-commit hook(with `husky` and `lint-staged`). The lib `npm-run-all` is also used for a parallel execution of required code validations.

### Yarn Scripts

The following utility Yarn scripts are available:

- `format:check`: Gets a list of all unformatted code in the project.
- `format:fix`: Fixes the format issues of all the unformatted files.
- `prettier`: Runs `prettier` and below functionality can be added with `--arg`.
- `lint`: Runs configured linter.
- `type:check`: Checks the code for type issues.
- `validate`: Runs all three: linting, formatting, and type checking, in parallel.
- `test`: Runs all `react-scripts` tests(use jest deep down).
- `test-watch`: Runs all tests in watch mode. 
- `bootstrap:yalc-usage`: Builds the lib and pushes installation to all local packages that currently uses the lib.

### Extra eslint plugins

Due the extensive use of typescript, storybook, and styled components in the library, there was an extra need for some plugins for eslint:

- [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook)

### Extra libs

- `@storybook/testing-react`: A utility to avoid boilerplate code in tests, reutilizing stories. Basic tutorial [here](https://medium.com/storybookjs/testing-lib-storybook-react-8c36716fab86)

### Custom rules

- The following rule is due a some bug where the Airbnb config does not allow importing typescript files:

  ```js
  'import/extensions': [
    'error',
    'ignorePackages',
    {ts: 'never',tsx: 'never'}
  ],
  ```

- The following rule is due `storybook` being installed as a dev dependency. This allows us to import stuff from dev dependencies too.

  ```js
  'import/no-extraneous-dependencies': [
    	'error',
  	{ devDependencies: true, },
  ],
  ```

- The following rule is due the need in some cases to forward props to an inner native component like some `Button` component rendering a modified version of `<button/>`:

  ```js
  'react/jsx-props-no-spreading': 'off'
  ```

- The following rule is to enforce desired function component definition:

  ```js
  'react/function-component-definition': [
      'error',
      {
          namedComponents: 'arrow-function',
          unnamedComponents: 'function-expression'
      }
  ],
  ```

## Git pre commit hook and Husky

The library enforces coding style with git pre commit hook using `husky` and `lint-staged`.

:warning: The `lint-staged` right now is not using `validate` script because some error finding task, but uses each of the three: linting, formatting, and type checking scripts.

## Testing

The library uses [react-testing-library](https://testing-library.com/docs/react-testing-library/example-intro) so is good idea to follow his conventions and documentation. Also, because of the use of storybook, to aid us and avoid repeating code, we use [`@storybook/testing-react`](https://storybook.js.org/addons/@storybook/testing-react) , an example is attached below. 

Each component should have some mandatory tests, for example:

 ### Snapshot test:

```tsx
test('checkbox snapshot test', () => {
  const tree = render(<Base />);
  expect(tree).toMatchSnapshot();
});
```

The first time this generates a `__snapshots__/Component.test.tsx.snap` file that needs to be included in git repository, the subsequent runs of the test, compares results with the existing snapshot. 

In case of need to change the snapshot(regenerate it), use the script `test --updateSnapshot`, although, this will regenerate all failing snapshots, so use if only the desired snapshots to update are the only ones failing, or use it as `test --updateSnapshot --testNamePattern "checkbox"`, this will skip tests that do not match the pattern, so only will regenerate snapshots of the tests that match the actual pattern.

### Critical functionality test(aided by `@storybook/testing-react`)

This test should check the correctness of the components core functionalities. An example of this test should be something in the line of:

```tsx
import {composeStories} from '@storybook/testing-react';
import * as stories from './Checkbox.stories';

const {Base} = composeStories(stories);

test('checkbox toggle', () => {
  render(<Base />);

  const checkbox = screen.getByRole('checkbox');

  // Execute the click event of the checkbox
  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  // Execute the click event again
  userEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
```

Note the use of `composeStories`, this let us reutilize any configuration made to create the stories of the component, and avoid writing boilerplate code.

## Theme

Base theme for styled components is set internally in storybook by using a global decorator that wraps stories in a `ThemeProvider`, like this:

```tsx
import {styledDefaultTheme} from '../src/styles/index';

const withThemeProvider = (Story: React.FC, context: Record<string, unknown>) => (
  <ThemeProvider theme={styledDefaultTheme}>
    <Story {...context} />
  </ThemeProvider>
);
```

Any global theme config during development can be defined inside  `styledDefaultTheme`.

## Components

### Development highlights

 Besides the atomic design, all components should have a common interface via props, and be close to native and customizable as possible. In order to achieve this, we forward all native props from actual component to underlying base native component(html tag), i.e:

```tsx
interface InputProps extends BaseProps<HTMLInputElement> {
  maskPreset?: 'phone' | 'email' | 'text' | 'number';
}

const Input: React.FC<InputProps> = ({
  maskPreset,
  className,
  ...rest
}) => {
  const mask = masks[maskPreset];

  return (
    <StyledInput
      as='input'
      className={`masked-as-${mask} ${className || ''}`}
      {...rest}
    />
  );
};


// Using the component
<Input
    role='textbox'
    aria-label='required-name'
    required
    style={{color: 'red'}}
/>

```

Few key elements here:

- It is important to be careful with the spreading of props, always deconstruct all manually defined props to avoid issues passing extra props to underlying element. In this case the only one needed was `maskPreset`.
- If there is a need to edit the `className`, the captured `className` in props should be included also, making the component fully customizable and compatible with styled components.
- This way of using full fledged html and react capabilities the resulting component should be as close to native as possible.

### Checkbox

### Input

- For masking the input the external libs [text-mask](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme) and [text-mask-addons](https://github.com/text-mask/text-mask/tree/master/addons/#readme) are in use.
- For example use cases of the aforementioned libs [this](https://codesandbox.io/examples/package/react-text-mask) can be helpful.
- :warning: Also this used libs have some issues with using an input of types: `number` or `email`, so in those cases a regular `text` type is used.

### DynamicComponent

This is an utility component to have the ability to dynamically stylize different tags, like variants for a specific component(i.e: `Typography`).

### Icon

- `Icons` components are exported as is, but also can be used through the `Icon` component, passed as its `icon` prop.

- Default size of `Icons` is set to 24px unless `width` and `height` props are provided.

- The `size` prop in the `Icon` component stablish the `width` and `height` in the icons according to the `presetSizes` object predefined. Related to this behavior, a test has been added.

- The color associated with the prop `disabled` has precedence over the prop `color`, who also has precedence over the color imposed by `primary` prop. The colors associated with `disabled` and `primary` props are retrieved from the `colors` object inside theme.

### Typography

- To test different fonts in `typography` stories, a link to a cdn can be added the in `.storybook/preview-head.html`, and then probably the storybook server needs to be restarted.
- The prop `color` does a map with the `typography.base.colors` object inside theme(or in case of passed a `preset`, from `typography.preset[<name>].colors`), or sets `color` as is, in the css.
- By default all instances have `margin` and `padding` in `0`, to override this needs to be changed inside applied theme(`typography.base.margin`,`typography.base.padding`), or in selected preset. 
- The inner workings of `Typography` uses a wrapper for the theme, overriding the current app theme, to avoid wrapping the result in the new theme set the `preset` prop to `null`.(beware that this renders unusable some other props, almost all except: `margin`, `padding`, `lineNumbers` and other native props) 

### Dropdown

Dropdown component uses an external lib ([react-select](https://react-select.com)) to provide a customized select control.

- Dropdown can be used as a single value or multi value selector

- Since react-select library uses a replaceable component architecture, we can pass our custom pre-made components:

```tsx
const TiOption = ({...props}: OptionProps<TiOptions, true>) => (
  <components.Option {...props}>
    <Option
      primary={props.selectProps.primary}
      text={props.label}
      selected={props.isSelected}
      noCheckbox={!props.selectProps.optionWithCheckBox}
    />
  </components.Option>
);

const Dropdown: React.ComponentType<DropdownProps> = ({
  ...
}) => {
  ...
  return (
    <Select
      components={{
        Option: TiOption,
      }}
      primary={primary}
      optionWithCheckBox={optionWithCheckBox}
    />
```

- Some of the props passed into it, such as `text` and `selected` are provided by the react-select [API](https://react-select.com/props#api). 

- In order to be able to pass custom props to the Select returned by our component, such as `primary` and `optionWithCheckBox` in the previous example, we need to include, as described in [here](https://github.com/JedWatson/react-select/issues/4804#issuecomment-927223471), the following snippet:

```tsx
declare module 'react-select/dist/declarations/src/Select' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    /**
     * Here we declare our custom props, which will be passed to the select
     * @param primary - Set the theme type.
     * @param optionWithCheckBox - If checkboxes are shown in options that populate the list.
     */
    primary?: boolean;
    optionWithCheckBox?: boolean;
  }
}
```
- To set the Dropdown selectable options, pass an object of `TiOptions` type into the `options` prop.

- To set the selected values, pass an array with the entries of the `options` object you want to be selected in the `defaultValue` prop.

- For having access to the selected option, pass a setter function into the `setValue` prop, it will be called every time the Select changes its selected values. The value the setter will be aware of is the same as in `defaultValue`.

### Modal
Modal component is implemented using html native `dialog` tag.
- It can hold any kind of children.
- Its visibility can be controlled.
- Can be optionally dismissed or not pressing ESC.
- Can be optionally closed or not clicking its backdrop.
- Backdrop's background color (opacity included) can be modified.
- The Modal container itself can be also styled inline.

### Alert
Alert component is implemented using Modal component.
- Its visibility can be controlled.
- Can't be dismissed by pressing ESC.
- Can't be closed clicking its backdrop.
- Can optionally hold a close button.
- It accepts 2 callback function to execute when accepting or rejecting it.
- It currently only has an immutable default theme, but...
- Backdrop's background color (opacity included) can be modified.

### Toast / Snackbar
Toast component is implemented using HTML div tag.
- It can be used as *toast* (default) or *snackbar* by setting `isSnackbar` prop.
- The Snackbar holds a `message`. Toast holds also a `description`.
- Can optionally hold an icon (`noIcon`).
- Can optionally hold a close button (`noCloseButton`).
- Can optionally hold an action button (`noAction`).
- Action button's label can be customized.
- Its visibility can be controlled using `isOpen` and `setIsOpen` props.
- Can't be dismissed by pressing ESC.
- Doesn't have a backdrop.
- It accepts 3 callback function to execute when:
  + triggering action (`onActionClicked`)
  + clicking close button (`onDismissed`)
  + reaching timeout (`onTimeout`)
- By default, after executing any of these callbacks, toast/snackbar is removed from the dom.
- Optional `icon` can be passed as prop.
- Background color can be customized using `background`.
- Highlight color (for typography and icons) can be customized setting `highlightColor`.
- The `timeout` can also be set.
- It has 5 types which match preset themes:
  + `error`
  + `warning`
  + `success`
  + `info`
  + `default`
- These types override the customized values of background and highlight color. 
- Its position is managed by the `Notification` wrapper component.

### Notification
The `Notification` component is a wrapper implemented using a div tag.
- It listens to emitted ADD_TOAST events.
- Internally handles the Toast/Snackbar list of visible notification items. 
- Also handles the Toast/Snackbar positions in the viewport using the following 6 presets:
  + top-left
  + top-center
  + top-right
  + bottom-left
  + bottom-center
  + bottom-right

To send a Toast/Snackbar notification, you must:

1. Use the Notification component in your page/component.
    + Optionally specify the toast's position in the viewport.
    ```tsx
    {...}
    return (
      <>
        <Button text="Send Toast" onClick={() => handleToast()} />
        <Notification position={position} />
      </>
    );
    ```

2. Call the `toast` function provided by the NotificationEmitter passing them the data of the Toast/Snackbar to be displayed.
    ```tsx
    const handleToast = () => {
        toast({
          message: 'Toast message',
          description: 'Toast description',
          noAction,
          type: 'success',
          timeout,
          // isSnackbar, // uncomment line-starting to show an snackbar
        });
      };
    ```

### NavButton
`NavButton` component implemented based on `Button` component
- Can hold an icon and text
- Accepts an href to be lately used
- Its background is transparent by default, `highlight` prop 
makes the background colored with the theme's opposite color 
to its typography and icon's color

_TODO_: This component is using basic CSS animations. In the future, 
we should write the animations in a way we can reuse them later.

## Roadmap

- [x] Add chromatic test/ UI verification to CI pipeline
- [x] Fix CI: start using `yarn` with `yarn.lock` or use `npm install` instead of `npm ci`
- [x] Check/fix if styled components needs some eslint configurations
- [ ] Check if styled components can be a dev dependency
- [x] Document the test making flow
- [ ] Integrate test with stories in storybook
- [ ] Document how to use library(theme use mainly)

## Notes

:warning: The `.prettierignore` file should contain also the data from `.gitignore` and `.eslintignore`, and right now there is no clean way of doing it dynamically (would be cool though). So any changes in the above files should be mirrored in ` .prettierignore`.

