<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import './styles.css'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Proviral Check',
    content: 'The first filter applied is whether the sample is marked as proviral or not. If the sample is non-proviral, it is skipped entirely, and a message like "sample X was skipped" is logged. This check is based on MiCall\'s project code, which is expected contain "NFL" it it, such as "NFLHIVDNA".',
  },
  {
    value: 'item-2',
    title: 'Remap Check',
    content: 'If the sample has a remap value of 0 in the cascade.csv file, it means that the sample has no sequence data to work with, and the following error is logged: "No contig/conseq constructed".',
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can <b>use</b> the transition prop to configure the animation.',
  },
  {
    value: 'item-4',
    title: 'Can it be animated?',
    content: 'Yes! You can <b>use</b> the transition prop to configure the animation.',
  },
]

</script>

<template>
  <AccordionRoot

    class="AccordionRoot"
    default-value="'item-1'"
    type="single"
    :collapsible="true"

    style="width: 300px;"

    @keydown.stop.prevent
    @keypress.stop.prevent
    @keyup.stop.prevent

   >
    <template
      v-for="item in accordionItems"
      :key="item.value"
    >
      <AccordionItem
        class="AccordionItem"
        :value="item.value"
      >
        <AccordionHeader class="AccordionHeader">
          <AccordionTrigger class="AccordionTrigger">
            <span>{{ item.title }}</span>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="AccordionContent">
          <div class="AccordionContentText">
          <p> hello there </p>
            {{ item.content }}
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>
