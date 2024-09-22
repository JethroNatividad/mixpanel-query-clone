import React from 'react'
import {
  RuleGroupBodyComponents,
  RuleGroupHeaderComponents,
  RuleGroupProps,
  useRuleGroup,
} from 'react-querybuilder'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import {
  LetterCaseCapitalizeIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
} from '@radix-ui/react-icons'

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
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='ghost' className='flex font-medium'>
            <PlusIcon className='mr-2' />
            Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent side='bottom' align='start' className='w-[430px]'>
          <div className='w-full'>
            <div className='mb-4 flex'>
              <div className='flex flex-1 items-center space-x-2 rounded-md bg-muted p-2 text-muted-foreground'>
                <MagnifyingGlassIcon className='size-5' />
                <input
                  type='text'
                  className='w-full bg-inherit outline-none'
                  placeholder='Search...'
                />
              </div>

              <Button
                variant='ghost'
                size='lg'
                className='flex px-3 font-medium'
              >
                <PlusIcon className='mr-2' />
                Create
              </Button>
            </div>
            <div className='grid grid-cols-10'>
              <div className='pr col-span-4 border-r pr-2'>
                <button className='flex w-full items-center justify-start space-x-2 rounded-sm bg-primary/10 p-2 text-primary'>
                  <LetterCaseCapitalizeIcon className='size-4' />
                  <span className='text-xs'>All</span>
                </button>
              </div>
              <div className='col-span-6 pl-2'>
                <p className='p-2 text-xs font-bold text-muted-foreground'>
                  Recents
                </p>
                <button className='flex w-full items-center justify-start space-x-2 rounded-sm bg-primary/10 px-2 py-3 text-primary'>
                  <LetterCaseCapitalizeIcon className='size-5' />
                  <span className='text-sm'>All</span>
                </button>

                <hr className='my-2' />
                <p className='p-2 text-xs font-bold text-muted-foreground'>
                  All Properties
                </p>
                <div>
                  {ruleGroup.schema.fields.map((field) => {
                    // if field has fieldType, and === date
                    if ('inputType' in field && field.inputType === 'date') {
                      return (
                        <button
                          key={field.label}
                          className='flex w-full items-center justify-start space-x-2 rounded-sm px-2 py-3 hover:bg-primary/10 hover:text-primary'
                        >
                          <CalendarIcon className='size-5' />
                          <span className='text-sm'>{field.label}</span>
                        </button>
                      )
                    }

                    return (
                      <button
                        key={field.label}
                        className='flex w-full items-center justify-start space-x-2 rounded-sm px-2 py-3 hover:bg-primary/10 hover:text-primary'
                      >
                        <LetterCaseCapitalizeIcon className='size-5' />
                        <span className='text-sm'>{field.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CustomRuleGroup
