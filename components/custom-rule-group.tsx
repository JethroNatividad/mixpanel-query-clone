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

const CustomRuleGroup = (props: RuleGroupProps) => {
  const ruleGroup = useRuleGroup(props)
  const [isOpen, setIsOpen] = useState(false)

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
      <Popover open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
        <PopoverTrigger asChild>
          <Button variant='ghost' className='flex font-medium'>
            <PlusIcon className='mr-2' />
            Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent side='bottom' align='start' className='w-[430px] p-0'>
          <Popover open={isOpen}>
            <PopoverContent side='right' align='start'>
              <div className='w-[288px]'>
                <h1>Sidebar</h1>
              </div>
            </PopoverContent>
            <PopoverAnchor asChild>
              <div className='p-4 pb-0'>
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
                      {!isFullOptionGroupArray(ruleGroup.schema.fields) &&
                        ruleGroup.schema.fields.map((field) => {
                          const handleAddRule = () => {
                            const query = ruleGroup.schema.getQuery()
                            const rule = ruleGroup.schema.createRule()
                            const path = ruleGroup.path
                            rule.field = field.name
                            rule.operator = '='

                            if (query) {
                              ruleGroup.schema.dispatchQuery(
                                add(query, rule, path)
                              )
                            }

                            setIsOpen(false)
                          }

                          if (field.inputType === 'date') {
                            return (
                              <button
                                key={field.label}
                                onClick={handleAddRule}
                                className='flex w-full items-center justify-start space-x-2 rounded-sm px-2 py-3 hover:bg-primary/10 hover:text-primary'
                              >
                                <CalendarIcon className='size-5' />
                                <span className='text-sm'>{field.label}</span>
                              </button>
                            )
                          }

                          return (
                            <button
                              className='flex w-full items-center justify-start space-x-2 rounded-sm px-2 py-3 hover:bg-primary/10 hover:text-primary'
                              onClick={handleAddRule}
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
            </PopoverAnchor>
          </Popover>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CustomRuleGroup
