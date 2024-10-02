<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import './styles.css'
</script>

<template>
  <AccordionRoot

    class="AccordionRoot"
    default-value="'item-1'"
    type="single"
    :collapsible="true"

    @keydown.stop.prevent
    @keypress.stop.prevent
    @keyup.stop.prevent

    >

<AccordionItem class="AccordionItem" value='item-1'>
  <AccordionHeader class="AccordionHeader">
    <AccordionTrigger class="AccordionTrigger">
      <span>
        Handling Missing Primers
      </span>
    </AccordionTrigger>
  </AccordionHeader>
  <AccordionContent class="AccordionContent">
    <div class="AccordionContentText">
      If either the forward or reverse primer is not found at the expected end, the sequence is tagged with errors such as:
      <ul>
        <li><i>"primer was not found"</i></li>
        <li><i>"low read coverage in primer region"</i> (if the region near the end of the sequence does not have enough read coverage to reliably detect the primer)</li>
        <li><i>"primer failed secondary validation"</i> (if a primer is found but fails a secondary validation step)</li>
      </ul>
    </div>
  </AccordionContent>
</AccordionItem>

<AccordionItem class="AccordionItem" value='item-2'>
  <AccordionHeader class="AccordionHeader">
    <AccordionTrigger class="AccordionTrigger">
      <span>
        Handling Clustered X's
      </span>
    </AccordionTrigger>
  </AccordionHeader>
  <AccordionContent class="AccordionContent">
    <div class="AccordionContentText">
      If there are gaps (<b>X</b>'s) in the sequence, the pipeline attempts to remove them if they are <b>clustered near the ends</b>. If the <b>X</b>'s cannot be removed, the sequence is skipped for primer detection in that region.
    </div>
  </AccordionContent>
</AccordionItem>

<AccordionItem class="AccordionItem" value='item-3'>
  <AccordionHeader class="AccordionHeader">
    <AccordionTrigger class="AccordionTrigger">
      <span>
        Primer Validation
      </span>
    </AccordionTrigger>
  </AccordionHeader>
  <AccordionContent class="AccordionContent">
    <div class="AccordionContentText">
      The pipeline validates that primers match expected sequences. If a primer sequence partially matches but fails secondary validation, it is considered invalid, and the error <i>"primer failed secondary validation"</i> is logged.
    </div>
  </AccordionContent>
</AccordionItem>

<AccordionItem class="AccordionItem" value='item-4'>
  <AccordionHeader class="AccordionHeader">
    <AccordionTrigger class="AccordionTrigger">
      <span>
        Reverse Complementation
      </span>
    </AccordionTrigger>
  </AccordionHeader>
  <AccordionContent class="AccordionContent">
    <div class="AccordionContentText">
      If a sequence does not pass primer detection in its current form, the pipeline attempts to analyze the <b>reverse complement</b> of the sequence. If primers are found in the reverse complement, it is used for further analysis, and a log message is generated indicating that the reverse complement was used.
    </div>
  </AccordionContent>
</AccordionItem>

  </AccordionRoot>
</template>
