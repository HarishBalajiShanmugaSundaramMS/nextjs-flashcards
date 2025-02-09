'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function FlashcardForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="English Singular" {...register("English Singular", {required: true, max: 50, min: 3, maxLength: 80})} />
      <input type="text" placeholder="English Plural" {...register("English Plural", {required: true, max: 50, min: 4, maxLength: 100})} />
      <input type="text" placeholder="German Singular" {...register("German Singular", {required: true, max: 100, min: 3, maxLength: 100})} />
      <input type="text" placeholder="German Plural" {...register("German Plural", {required: true, max: 50, min: 3, maxLength: 100})} />
      <input type="text" placeholder="Tamil Singular" {...register("Tamil Singular", {required: true, max: 50, min: 3, maxLength: 80})} />
      <input type="text" placeholder="Tamil Plural" {...register("Tamil Plural", {required: true, max: 50, min: 4, maxLength: 100})} />
      <input {...register("Gender", { required: true })} type="radio" value="Male" />
      <input {...register("Gender", { required: true })} type="radio" value="Female" />
      <input {...register("Gender", { required: true })} type="radio" value="Neutral" />
      <select {...register("Tags", { required: true })}>
        <option value="Wildlife">Wildlife</option>
        <option value="Occupation">Occupation</option>
        <option value="Places">Places</option>
      </select>

      <input type="submit" />
    </form>
  );
}