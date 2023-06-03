export interface CardInfo {
  image: string;
  title: string;
  urlLink: string;
  generatedUrl: string;
  stack?: string;
  cardColor: string;
  titleColor: string;
  stackBorderColor: string;
  stackBackgroundColor: string;
  stackTextColor: string;
  isLoading: boolean;
  isHorizontal: boolean;
}

//

export interface MyContextProps {
  type: number;
  currentColor: string;
  handleChangeColor: any;
}

//

export type ImageRendering =
  | 'auto'
  | 'crisp-edges'
  | 'pixelated'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset';

//

export interface InputSetting {
  label: string;
  type: string;
  placeHolder: string;
  additionalClasses?: string;
  value: string;
  handleOnChange: any;
}

//

export interface ColorPickerData {
  type?: number;
  currentColor: string;
  handleChangeColor: string;
  pickerType?: number;
  additionalStyle?: string;
}
