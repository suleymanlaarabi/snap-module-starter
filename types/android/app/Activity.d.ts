declare interface AndroidActivityBundle {
  [key: string]: any;
}

declare interface AndroidActivityMenu {}

declare interface AndroidActivityMenuItem {}

declare interface AndroidActivityView {}

declare interface AndroidActivityKeyEvent {}

declare interface AndroidActivityMotionEvent {}

declare interface AndroidActivity {
  context: AndroidContentContext;
  intent: AndroidContentIntent;
  savedInstanceState: AndroidActivityBundle | null;

  onCreate(savedInstanceState: AndroidActivityBundle | null): void;
  onStart(): void;
  onResume(): void;
  onPause(): void;
  onStop(): void;
  onDestroy(): void;
  onRestart(): void;

  onCreateOptionsMenu(menu: AndroidActivityMenu): boolean;
  onOptionsItemSelected(item: AndroidActivityMenuItem): boolean;

  onTouchEvent(event: AndroidActivityMotionEvent): boolean;
  onKeyDown(keyCode: number, event: AndroidActivityKeyEvent): boolean;
  onKeyUp(keyCode: number, event: AndroidActivityKeyEvent): boolean;

  findViewById(id: number): AndroidActivityView;
  startActivityForResult(
    intent: AndroidContentIntent,
    requestCode: number
  ): void;
  setResult(resultCode: number, data: AndroidContentIntent): void;
  finish(): void;
}