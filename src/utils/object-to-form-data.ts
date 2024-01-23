/* eslint-disable @typescript-eslint/no-explicit-any */
export function objectToFormData(obj: any) {
   const formData = new FormData();

   Object.entries(obj).forEach(([key, value]: [any, any]) => {
      formData.append(key, value);
   });

   return formData;
}
