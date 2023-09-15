'use client'

import { error } from 'console';
import { Button, TextInput } from 'flowbite-react';
import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import Input from '../components/Input';

export default function AuctionForm() {
    const { control, handleSubmit, setFocus,
        formState: { isSubmitting, isValid, isDirty, errors } } = useForm({
            mode: 'onTouched'
        });

        useEffect(() => {
            setFocus('make');
        }, [setFocus])

    function onSubmit(data: FieldValues) {
        console.log(data);
    }

  return (
    <form className='flex flex-col mt-3' onSubmit={handleSubmit(onSubmit)}>
            <Input label='Make' name='make' control={control}
                rules={{required: 'Make is required'}}/>
            <Input label='Model' name='model' control={control}
                rules={{required: 'Model is required'}}/>
            <Input label='Color' name='color' control={control}
                rules={{ required: 'Color is required' }} />
            
            <div className='grid grid-cols-2 gap-3'>
                <Input label='Year' name='year' control={control} type='number'
                    rules={{ required: 'Year is required' }} />
                <Input label='Mileage' name='mileage' control={control} type='number'
                    rules={{ required: 'Mileage is required' }} />
            </div>

            <Input label='Image URL' name='imageUrl' control={control}
                rules={{ required: 'Image URL is required' }} />

            <div className='grid grid-cols-2 gap-3'>
                <Input label='Reserve Price (enter 0 if no resere)'
                    name='reservePrice' control={control} type='number'
                    rules={{ required: 'Reserve pirice is required' }} />
                <Input label='Auction end date/time' name='auctionEnd'
                    control={control} type='date'
                    rules={{ required: 'Auction end date is required' }} />
            </div>
         
        <div className='flex justify-between'>
            <Button outline color='gray'>Succes</Button>
            <Button isProcessing={isSubmitting}
                disabled={!isValid}
                type='submit'
                outline color='succes'>Submit</Button>
        </div>
    </form>
  )
}
