import {helpers} from '@vuelidate/validators';

type ImageTypes = 'image/jpeg' | 'image/jpg' | 'image/png'

export interface imageOptions {
  size: number,
  mimeTypes: ImageTypes[];
}

export const isImageValid = (options?: imageOptions) => {
  const {size, mimeTypes}: imageOptions = {
    size: 1_048_576, // MB
    mimeTypes: ['image/jpeg', 'image/jpg', 'image/png'],
    ...options,
  };

  return helpers.withParams(
      {options: options, message: 'Obrázek není ve správné velikosti/formátu'},
      (value: File) => {
        if (!value) {
          return true;
        }
        return value.size <= size && mimeTypes.find((type) => type === value.type) !== undefined;
      },
  );
};
