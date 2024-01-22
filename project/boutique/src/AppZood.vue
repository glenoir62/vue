<template>
  <input v-model="usernameValue" type="text" />
  <p v-if="usernameError">{{ usernameError }}</p>

  <pre>
    {{ usernameValue }}
  </pre>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { z } from 'zod'
import { toFormValidator } from '@vee-validate/zod'

/*

@vee-validate/zod est la librairie qui permet de rendre compatible les schémas Zod
 et vee-validate grâce une fonction : toTypedSchema.


import { z } from "zod";

z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.undefined();
z.object();
z.null();
z.void(); // accepte undefined
z.any();
z.unknown();
z.never();

z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().email();
z.string().url();
z.string().uuid();
z.string().cuid();
z.string().regex(regex);

z.number().gt(5);
z.number().gte(5); // alias .min(5)
z.number().lt(5);
z.number().lte(5); // alias .max(5)

z.number().int();

z.number().positive(); //   > 0
z.number().nonnegative(); //  >= 0
z.number().negative(); //  < 0
z.number().nonpositive(); //  <= 0

z.number().multipleOf(5);

z.string().array().min(5);
z.string().array().max(5);
z.string().array().length(5);

*/
const validationSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Le champ est trop court' })
    .nonempty({ message: 'Le champ est obligatoire' })
    .max(10, { message: 'Le champ est trop long' })
})

useForm({ validationSchema: toFormValidator(validationSchema) })

const { value: usernameValue, errorMessage: usernameError } = useField('username')
</script>

<style scoped lang="scss"></style>
