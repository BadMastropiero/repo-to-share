export enum TouchEventType {
  SWIPE_LEFT = 1,
  SWIPE_RIGHT = 2,
  SWIPE_UP = 3,
  SWIPE_DOWN = 4,
}

export default class TouchEvent {
  static SWPIE_THRESHOLD = 50; // Minumum difference in pixels at which a swipe gesture is detected

  // TODO improve types
  startEvent: any;

  endEvent: null;

  constructor(startEvent: any, endEvent: null) {
    this.startEvent = startEvent;
    this.endEvent = endEvent || null;
  }

  isSwipeLeft() {
    return this.getSwipeDirection() === TouchEventType.SWIPE_LEFT;
  }

  isSwipeRight() {
    return this.getSwipeDirection() === TouchEventType.SWIPE_RIGHT;
  }

  isSwipeUp() {
    return this.getSwipeDirection() === TouchEventType.SWIPE_UP;
  }

  isSwipeDown() {
    return this.getSwipeDirection() === TouchEventType.SWIPE_DOWN;
  }

  getSwipeDirection() {
    const start = this.startEvent.changedTouches[0];
    // @ts-ignore
    const end = this.endEvent?.changedTouches[0];

    if (!start || !end) {
      return null;
    }

    const horizontalDifference = start.screenX - end.screenX;
    const verticalDifference = start.screenY - end.screenY;

    // Horizontal difference dominates
    if (Math.abs(horizontalDifference) > Math.abs(verticalDifference)) {
      if (horizontalDifference >= TouchEvent.SWPIE_THRESHOLD) {
        return TouchEventType.SWIPE_LEFT;
      }
      if (horizontalDifference <= -TouchEvent.SWPIE_THRESHOLD) {
        return TouchEventType.SWIPE_RIGHT;
      }

      // Verical or no difference dominates
    } else {
      if (verticalDifference >= TouchEvent.SWPIE_THRESHOLD) {
        return TouchEventType.SWIPE_UP;
      }
      if (verticalDifference <= -TouchEvent.SWPIE_THRESHOLD) {
        return TouchEventType.SWIPE_DOWN;
      }
    }

    return null;
  }

  setEndEvent(endEvent: null) {
    this.endEvent = endEvent;
  }
}
