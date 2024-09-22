import React, { useState } from 'react'
import {
  RuleGroupBodyComponents,
  RuleGroupHeaderComponents,
  RuleGroupProps,
  useRuleGroup,
  isFullOptionGroupArray,
  add,
} from 'react-querybuilder'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  PopoverAnchor,
} from './ui/popover'
import { Button } from './ui/button'
import {
  LetterCaseCapitalizeIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
} from '@radix-ui/react-icons'
import CustomFieldSelector from './custom-field-selector'

const CustomRuleGroup = (props: RuleGroupProps) => {
  const ruleGroup = useRuleGroup(props)

  return (
    <div className='border p-4'>
      <div>
        <RuleGroupHeaderComponents
          {...(ruleGroup as Parameters<typeof RuleGroupHeaderComponents>[0])}
        />
      </div>
      <div>
        <RuleGroupBodyComponents
          {...(ruleGroup as Parameters<typeof RuleGroupBodyComponents>[0])}
        />
      </div>
      <CustomFieldSelector
        schema={props.schema}
        path={props.path}
        options={props.schema.fields}
        TriggerButton={(buttonProps) => (
          <Button {...buttonProps} variant='ghost' className='flex font-medium'>
            <PlusIcon className='mr-2' />
            Filter
          </Button>
        )}
        handleOnChange={() => null}
        level={0}
      />
    </div>
  )
}

export default CustomRuleGroup
