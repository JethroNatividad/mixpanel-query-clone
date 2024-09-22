import React, { ComponentType, useState } from 'react'
import {
  isFullOptionGroupArray,
  add,
  FieldSelectorProps,
  RuleType,
} from 'react-querybuilder'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from './ui/popover'
import { Button, ButtonProps } from './ui/button'
import {
  LetterCaseCapitalizeIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
} from '@radix-ui/react-icons'

interface CustomFieldSelectorProps extends Omit<FieldSelectorProps, 'rule'> {
  rule?: RuleType
  TriggerButton: ComponentType<ButtonProps>
}

const CustomFieldSelector = ({
  schema,
  path,
  TriggerButton,
}: CustomFieldSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
      <PopoverAnchor>
        <TriggerButton onClick={() => setIsOpen(true)} />
      </PopoverAnchor>
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
                    {!isFullOptionGroupArray(schema.fields) &&
                      schema.fields.map((field) => {
                        const handleAddRule = () => {
                          const query = schema.getQuery()
                          const rule = schema.createRule()
                          rule.field = field.name
                          rule.operator = '='

                          if (query) {
                            schema.dispatchQuery(add(query, rule, path))
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
  )
}

export default CustomFieldSelector
