'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button, Callout, Text, TextField, TextFieldInput } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';

import "easymde/dist/easymde.min.css";
import { createIssueSchema } from '@/app/validationSchemas';
import ErrorMessage from '@/app/components/ErrorMessage';

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
  const router = useRouter()
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, setError] = useState('')

  return (
    <div className='max-w-xl space-y-4 mb-5'>
      {error && (
        <Callout.Root color="red">
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-4" 
      onSubmit={handleSubmit(async(data) => {
        try {
          await axios.post('/api/issues', data);
          router.push('/issues')
        } catch (error) {
          setError('An unexpected error occured.')
        }
      }
    )}>
      <TextField.Root>
        <TextFieldInput placeholder='Title' {...register('title')} />
      </TextField.Root>

      <ErrorMessage>{errors?.title?.message}</ErrorMessage>
      <Controller name="description" control={control} render={({ field }) => <SimpleMDE placeholder='Description' {...field} />} />
      <ErrorMessage>{errors?.description?.message}</ErrorMessage>

      <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage