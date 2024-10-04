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
  >

    <AccordionItem class="AccordionItem" value='item-1'>
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>defects.csv</span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
          Detailed description of every defect detected by CFEIntact. <br>
          This file lives at <a href="file:///RAW_DATA/MiSeq/runs/runid/Results/version_7.15/proviral/detailed_results/defects.csv" target="_blank">/<i>RAW_DATA</i>/MiSeq/runs/<i>runid</i>/Results/version<i>_7.15</i>/proviral/detailed_results/defects.csv</a>. <br>
          <a href="https://github.com/cfe-lab/CFEIntact/blob/master/tests/expected-results-small-csv/defects.csv" target="_blank">Example.</a>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="AccordionItem" value='item-2'>
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>landscapes.csv</span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
          Data used to plot the defect landscapes on BBLabTools. <br>
          This file lives at <a href="file:///RAW_DATA/MiSeq/runs/runid/Results/version_7.15/proviral/landscapes.csv" target="_blank">/<i>RAW_DATA</i>/MiSeq/runs/<i>runid</i>/Results/version<i>_7.15</i>/proviral/landscapes.csv</a>. <br>
          <a href="https://gist.github.com/Donaim/3371ccb218270be00af466beb771a4ab" target="_blank">Example.</a>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="AccordionItem" value='item-3'>
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>landscapes.svg</span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
          Landscape plot of sequences' defects. 
          <a href="https://raw.githubusercontent.com/gist/Donaim/aa2b1919ff521ab30b47c09924c365e9/raw/77bcdec7fb3fb1bab4879c72886dbd154b7e011a/landscape.svg" target="_blank">Example.</a>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="AccordionItem" value='item-4'>
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>regions.csv</span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
          Associations between sequences and their identified Open Reading Frames (ORFs). <br>
          This file lives at <a href="file:///RAW_DATA/MiSeq/runs/runid/Results/version_7.15/proviral/detailed_results/regions.csv" target="_blank">/<i>RAW_DATA</i>/MiSeq/runs/<i>runid</i>/Results/version<i>_7.15</i>/proviral/detailed_results/regions.csv</a>. <br>
          <a href="https://github.com/cfe-lab/CFEIntact/blob/master/tests/expected-results-small-csv/regions.csv" target="_blank">Example.</a>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="AccordionItem" value='item-5'>
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>outcome_summary.csv</span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
          Pipeline summary data. Contains QC status for each sequence, etc. <br>
          This file lives at <a href="file:///RAW_DATA/MiSeq/runs/runid/Results/version_7.15/proviral/outcome_summary.csv" target="_blank">/<i>RAW_DATA</i>/MiSeq/runs/<i>runid</i>/Results/version<i>_7.15</i>/proviral/outcome_summary.csv</a>. <br>
          <!-- Example link to be updated -->
          <a href="#" target="_blank">Example.</a>
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="AccordionItem" value='item-6'>
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>table_precursor.csv</span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
          Another pipeline summary kind of file. Contains data for sequences that passed QC. This includes final verdicts and gene regions. <br>
          This file lives at <a href="file:///RAW_DATA/MiSeq/runs/runid/Results/version_7.15/proviral/table_precursor.csv" target="_blank">/<i>RAW_DATA</i>/MiSeq/runs/<i>runid</i>/Results/version<i>_7.15</i>/proviral/table_precursor.csv</a>. <br>
          <!-- Example link to be updated -->
          <a href="#" target="_blank">Example.</a>
        </div>
      </AccordionContent>
    </AccordionItem>

  </AccordionRoot>
</template>
