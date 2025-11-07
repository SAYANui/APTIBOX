import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from '../components/ui/field';

const Test = () => {
  return (
    <section>
      <div className='p-3 flex items-center gap-3'>
        <Button variant="ghost" size="icon" aria-label="Submit">
          <FaArrowLeft />
        </Button>
        <h3 className='text-lg font-medium'>Test Page</h3>
      </div>
      <div className='flex flex-col justify-center items-center h-[80vh] p-6'>
        <div className="w-full max-w-md">
          <FieldGroup>
            <FieldSet>
              <FieldLegend variant="label">
                Q1. Which of the following items can be displayed on the Desktop?
              </FieldLegend>
              <FieldDescription>
                Select the correct answer to the question.
              </FieldDescription>
              <FieldGroup className="gap-3">
                <Field orientation="horizontal">
                  <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
                  <FieldLabel
                    htmlFor="finder-pref-9k2-hard-disks-ljj"
                    className="font-normal"
                    defaultChecked
                  >
                    Hard disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="finder-pref-9k2-external-disks-1yg" />
                  <FieldLabel
                    htmlFor="finder-pref-9k2-external-disks-1yg"
                    className="font-normal"
                  >
                    External disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
                  <FieldLabel
                    htmlFor="finder-pref-9k2-cds-dvds-fzt"
                    className="font-normal"
                  >
                    CDs, DVDs, and iPods
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
                  <FieldLabel
                    htmlFor="finder-pref-9k2-connected-servers-6l2"
                    className="font-normal"
                  >
                    Connected servers
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </div>
        <div className='w-full max-w-md flex justify-between mt-6'>
          <Button variant='outline' className='shadow-md' size='sm' disabled><MdKeyboardArrowLeft />Previous</Button>
          <Button className='bg-[#328aff] text-white hover:bg-[#1e9aff] shadow-md' size='sm'>Next<MdKeyboardArrowRight /></Button>
        </div>
      </div>
    </section>
  )
}

export default Test
