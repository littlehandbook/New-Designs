import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, User, Mail, Lock, Eye, EyeOff, Check, X, AlertCircle, Bell, Info, ChevronRight, Home, PlusIcon, Users, Calendar, MessageSquare, Settings, CreditCard, HelpCircle } from 'lucide-react';
import { Button, Card, CardTitle, CardDescription, Input, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Text, SmallText, Badge, Avatar, colors, typography, spacing, borderRadius, shadows } from '../design-system';
// Import new components
import { ClientCard } from '../design-system/components/ClientCard';
import { FormField, FormGroup, Checkbox, Radio, Select, Textarea } from '../design-system/components/FormField';
import { PageHeader, SectionHeader, AppHeader, SearchInput, NotificationButton, DefaultUserProfile } from '../design-system/components/Header';
import { Container, Grid, Flex, Divider, Box } from '../design-system/components/Layout';
import { Modal, Dialog, Drawer } from '../design-system/components/Modal';
export const DesignSystem = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // State for interactive components
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Sample client data for ClientCard
  const sampleClient = {
    id: 1,
    name: 'Sarah Johnson',
    emoji: '😊',
    emojiDate: 'Today, 9:15 AM',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    dateAdded: '01/12/2023',
    status: 'active',
    riskScore: 2,
    alerts: [{
      type: 'journal',
      message: 'New journal entry available'
    }, {
      type: 'form',
      message: 'Intake form completed'
    }],
    nextSession: {
      date: '05/03/2024',
      time: '10:00 AM',
      type: 'In-person',
      duration: '50 min'
    }
  };
  return <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-gray-500 hover:text-gray-700 mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Design System</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <Heading2>Introduction</Heading2>
            <Text className="mt-2">
              This design system provides a set of reusable components and
              design tokens to help maintain consistency across the application.
            </Text>
          </section>
          {/* Color Tokens */}
          <section>
            <Heading2>Color Tokens</Heading2>
            <Text className="mt-2 mb-6">
              These are the core colors used throughout the application.
            </Text>
            <div className="space-y-8">
              {/* Primary Colors */}
              <div>
                <Heading4 className="mb-4">Primary</Heading4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-11 gap-4">
                  {Object.entries(colors.primary).map(([key, value]) => <div key={key} className="flex flex-col">
                      <div className="h-16 rounded-md shadow-sm" style={{
                    backgroundColor: value
                  }}></div>
                      <SmallText className="mt-1 font-mono">{key}</SmallText>
                      <SmallText className="text-xs font-mono text-gray-500">
                        {value}
                      </SmallText>
                    </div>)}
                </div>
              </div>
              {/* Semantic Colors */}
              <div>
                <Heading4 className="mb-4">Semantic</Heading4>
                <div className="grid grid-cols-4 gap-4">
                  {['success', 'warning', 'error', 'info'].map(colorName => <div key={colorName}>
                      <Heading5 className="mb-2 capitalize">
                        {colorName}
                      </Heading5>
                      <div className="space-y-2">
                        {[100, 500, 900].map(shade => <div key={`${colorName}-${shade}`} className="flex items-center">
                            <div className="h-8 w-8 rounded-md shadow-sm mr-2" style={{
                        backgroundColor: colors[colorName][shade]
                      }}></div>
                            <SmallText className="font-mono">{shade}</SmallText>
                          </div>)}
                      </div>
                    </div>)}
                </div>
              </div>
              {/* Neutrals */}
              <div>
                <Heading4 className="mb-4">Neutrals</Heading4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-11 gap-4">
                  {Object.entries(colors.gray).map(([key, value]) => <div key={key} className="flex flex-col">
                      <div className="h-16 rounded-md shadow-sm" style={{
                    backgroundColor: value
                  }}></div>
                      <SmallText className="mt-1 font-mono">{key}</SmallText>
                      <SmallText className="text-xs font-mono text-gray-500">
                        {value}
                      </SmallText>
                    </div>)}
                </div>
              </div>
            </div>
          </section>
          {/* Typography */}
          <section>
            <Heading2>Typography</Heading2>
            <Text className="mt-2 mb-6">
              Consistent typography helps establish hierarchy and improve
              readability.
            </Text>
            <div className="space-y-8">
              {/* Headings */}
              <div>
                <Heading4 className="mb-4">Headings</Heading4>
                <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
                  <div>
                    <Heading1>Heading 1</Heading1>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-3xl font-bold
                    </SmallText>
                  </div>
                  <div>
                    <Heading2>Heading 2</Heading2>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-2xl font-bold
                    </SmallText>
                  </div>
                  <div>
                    <Heading3>Heading 3</Heading3>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-xl font-semibold
                    </SmallText>
                  </div>
                  <div>
                    <Heading4>Heading 4</Heading4>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-lg font-semibold
                    </SmallText>
                  </div>
                  <div>
                    <Heading5>Heading 5</Heading5>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-base font-semibold
                    </SmallText>
                  </div>
                  <div>
                    <Heading6>Heading 6</Heading6>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-sm font-semibold
                    </SmallText>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div>
                <Heading4 className="mb-4">Text</Heading4>
                <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
                  <div>
                    <Text>Default text</Text>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-base text-gray-900
                    </SmallText>
                  </div>
                  <div>
                    <Text variant="secondary">Secondary text</Text>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-base text-gray-700
                    </SmallText>
                  </div>
                  <div>
                    <Text variant="subtle">Subtle text</Text>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-base text-gray-500
                    </SmallText>
                  </div>
                  <div>
                    <Text variant="success">Success text</Text>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-base text-success-600
                    </SmallText>
                  </div>
                  <div>
                    <Text variant="warning">Warning text</Text>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-base text-warning-600
                    </SmallText>
                  </div>
                  <div>
                    <Text variant="error">Error text</Text>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-base text-error-600
                    </SmallText>
                  </div>
                  <div>
                    <SmallText>Small text</SmallText>
                    <SmallText className="text-gray-500 font-mono mt-1">
                      text-sm text-gray-900
                    </SmallText>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Buttons */}
          <section>
            <Heading2>Buttons</Heading2>
            <Text className="mt-2 mb-6">
              Buttons are used to trigger actions or events.
            </Text>
            <div className="space-y-8">
              {/* Button Variants */}
              <div>
                <Heading4 className="mb-4">Variants</Heading4>
                <div className="flex flex-wrap gap-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>
              {/* Button Sizes */}
              <div>
                <Heading4 className="mb-4">Sizes</Heading4>
                <div className="flex flex-wrap items-center gap-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>
              {/* Button States */}
              <div>
                <Heading4 className="mb-4">States</Heading4>
                <div className="flex flex-wrap gap-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                  <Button isLoading>Loading</Button>
                  <Button leftIcon={<Check className="h-4 w-4" />}>
                    With Left Icon
                  </Button>
                  <Button rightIcon={<ChevronRight className="h-4 w-4" />}>
                    With Right Icon
                  </Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </div>
            </div>
          </section>
          {/* Input Fields */}
          <section>
            <Heading2>Input Fields</Heading2>
            <Text className="mt-2 mb-6">
              Input fields allow users to enter and edit text.
            </Text>
            <div className="space-y-8">
              {/* Basic Inputs */}
              <div>
                <Heading4 className="mb-4">Basic Inputs</Heading4>
                <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Input label="Name" placeholder="Enter your name" />
                  <Input label="Email" type="email" placeholder="Enter your email" helperText="We'll never share your email with anyone else." />
                  <Input label="Password" type={passwordVisible ? 'text' : 'password'} placeholder="Enter your password" rightIcon={<button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="text-gray-400 hover:text-gray-500">
                        {passwordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>} />
                </div>
              </div>
              {/* Input with Icons */}
              <div>
                <Heading4 className="mb-4">Input with Icons</Heading4>
                <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Input label="Search" placeholder="Search..." leftIcon={<Search className="h-4 w-4 text-gray-400" />} />
                  <Input label="Username" placeholder="Enter username" leftIcon={<User className="h-4 w-4 text-gray-400" />} />
                  <Input label="Email" type="email" placeholder="Enter email" leftIcon={<Mail className="h-4 w-4 text-gray-400" />} />
                </div>
              </div>
              {/* Input States */}
              <div>
                <Heading4 className="mb-4">Input States</Heading4>
                <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Input label="Default" placeholder="Default input" />
                  <Input label="Disabled" placeholder="Disabled input" disabled />
                  <Input label="With error" placeholder="Error input" error="This field is required" />
                  <Input label="With helper text" placeholder="Helper text input" helperText="This is some helpful text" />
                </div>
              </div>
            </div>
          </section>
          {/* Cards */}
          <section>
            <Heading2>Cards</Heading2>
            <Text className="mt-2 mb-6">
              Cards are used to group related content and actions.
            </Text>
            <div className="space-y-8">
              {/* Basic Card */}
              <div>
                <Heading4 className="mb-4">Basic Card</Heading4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>
                      This is a simple card with some content.
                    </CardDescription>
                    <Text className="mt-4">
                      Cards are used to group related content and actions. They
                      can contain various components such as text, images, and
                      buttons.
                    </Text>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="primary">Primary Action</Button>
                      <Button variant="outline">Secondary Action</Button>
                    </div>
                  </Card>
                </div>
              </div>
              {/* Card with Header and Footer */}
              <div>
                <Heading4 className="mb-4">
                  Card with Header and Footer
                </Heading4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card header={<div className="flex justify-between items-center">
                        <CardTitle>Card with Header</CardTitle>
                        <Badge variant="primary">New</Badge>
                      </div>} footer={<div className="flex justify-end space-x-2">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="primary">Save</Button>
                      </div>}>
                    <Text>
                      This card has a header and footer. The header contains a
                      title and a badge, while the footer contains action
                      buttons.
                    </Text>
                  </Card>
                </div>
              </div>
              {/* Interactive Card */}
              <div>
                <Heading4 className="mb-4">Interactive Card</Heading4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card interactive>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-primary-100 rounded-full p-3">
                        <Home className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <CardTitle>Interactive Card</CardTitle>
                        <CardDescription>
                          Hover to see the effect
                        </CardDescription>
                      </div>
                    </div>
                  </Card>
                  <Card interactive>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-success-100 rounded-full p-3">
                        <Check className="h-6 w-6 text-success-600" />
                      </div>
                      <div className="ml-4">
                        <CardTitle>Interactive Card</CardTitle>
                        <CardDescription>
                          Hover to see the effect
                        </CardDescription>
                      </div>
                    </div>
                  </Card>
                  <Card interactive>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-warning-100 rounded-full p-3">
                        <Bell className="h-6 w-6 text-warning-600" />
                      </div>
                      <div className="ml-4">
                        <CardTitle>Interactive Card</CardTitle>
                        <CardDescription>
                          Hover to see the effect
                        </CardDescription>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          {/* Badges */}
          <section>
            <Heading2>Badges</Heading2>
            <Text className="mt-2 mb-6">
              Badges are used to highlight status, counts, or categories.
            </Text>
            <div className="space-y-8">
              {/* Badge Variants */}
              <div>
                <Heading4 className="mb-4">Variants</Heading4>
                <div className="flex flex-wrap gap-2 bg-white p-6 rounded-lg border border-gray-200">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>
              {/* Badge Sizes */}
              <div>
                <Heading4 className="mb-4">Sizes</Heading4>
                <div className="flex flex-wrap items-center gap-2 bg-white p-6 rounded-lg border border-gray-200">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
              {/* Badge with Icons */}
              <div>
                <Heading4 className="mb-4">With Icons</Heading4>
                <div className="flex flex-wrap gap-2 bg-white p-6 rounded-lg border border-gray-200">
                  <Badge variant="success" icon={<Check className="h-3 w-3" />}>
                    Completed
                  </Badge>
                  <Badge variant="warning" icon={<AlertCircle className="h-3 w-3" />}>
                    Warning
                  </Badge>
                  <Badge variant="error" icon={<X className="h-3 w-3" />}>
                    Rejected
                  </Badge>
                  <Badge variant="info" icon={<Info className="h-3 w-3" />}>
                    Information
                  </Badge>
                </div>
              </div>
            </div>
          </section>
          {/* Avatars */}
          <section>
            <Heading2>Avatars</Heading2>
            <Text className="mt-2 mb-6">
              Avatars represent users or entities throughout the UI.
            </Text>
            <div className="space-y-8">
              {/* Avatar Sizes */}
              <div>
                <Heading4 className="mb-4">Sizes</Heading4>
                <div className="flex flex-wrap items-center gap-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="xs" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="sm" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="lg" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="xl" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="2xl" />
                </div>
              </div>
              {/* Avatar with Initials */}
              <div>
                <Heading4 className="mb-4">With Initials</Heading4>
                <div className="flex flex-wrap items-center gap-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Avatar initials="JS" size="md" />
                  <Avatar initials="AB" size="md" />
                  <Avatar initials="MK" size="md" />
                  <Avatar initials="ZX" size="md" />
                </div>
              </div>
              {/* Avatar with Ring */}
              <div>
                <Heading4 className="mb-4">With Ring</Heading4>
                <div className="flex flex-wrap items-center gap-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md" ring ringColor="primary" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md" ring ringColor="success" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md" ring ringColor="warning" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md" ring ringColor="error" />
                </div>
              </div>
              {/* Avatar with Status */}
              <div>
                <Heading4 className="mb-4">With Status</Heading4>
                <div className="flex flex-wrap items-center gap-4 bg-white p-6 rounded-lg border border-gray-200">
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md" status="online" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md" status="offline" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md" status="busy" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md" status="away" />
                </div>
              </div>
            </div>
          </section>
          {/* Client Card */}
          <section>
            <Heading2>Client Card</Heading2>
            <Text className="mt-2 mb-6">
              Client cards display client information with a carousel for
              different views.
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ClientCard client={sampleClient} />
              <ClientCard client={{
              ...sampleClient,
              name: 'Michael Chen',
              emoji: null,
              status: 'inactive',
              riskScore: 4,
              alerts: [{
                type: 'report',
                message: 'Progress report due'
              }]
            }} />
            </div>
          </section>
          {/* Form Fields */}
          <section>
            <Heading2>Form Fields</Heading2>
            <Text className="mt-2 mb-6">
              Form fields provide a consistent way to collect user input.
            </Text>
            <Card className="p-6">
              <FormGroup title="Basic Information" description="Enter your personal details">
                <FormField label="Full Name" required>
                  <Input placeholder="Enter your full name" />
                </FormField>
                <FormField label="Email Address" helperText="We'll never share your email with anyone else">
                  <Input type="email" placeholder="Enter your email" />
                </FormField>
                <FormField label="Password" error="Password must be at least 8 characters">
                  <Input type="password" placeholder="Enter your password" />
                </FormField>
                <FormField label="Country">
                  <Select options={[{
                  value: 'us',
                  label: 'United States'
                }, {
                  value: 'ca',
                  label: 'Canada'
                }, {
                  value: 'uk',
                  label: 'United Kingdom'
                }]} placeholder="Select your country" />
                </FormField>
                <FormField label="Bio">
                  <Textarea placeholder="Tell us about yourself" rows={4} />
                </FormField>
              </FormGroup>
              <FormGroup title="Preferences">
                <Checkbox label="Subscribe to newsletter" helperText="Receive updates about new features" />
                <div className="mt-4">
                  <FormField label="Notification Preferences">
                    <div className="space-y-2 mt-2">
                      <Radio name="notifications" label="All notifications" />
                      <Radio name="notifications" label="Important only" />
                      <Radio name="notifications" label="None" />
                    </div>
                  </FormField>
                </div>
              </FormGroup>
            </Card>
          </section>
          {/* Headers */}
          <section>
            <Heading2>Headers</Heading2>
            <Text className="mt-2 mb-6">
              Headers provide consistent page and section titles with actions.
            </Text>
            <div className="space-y-8">
              <Card className="p-6">
                <Heading4 className="mb-4">Page Header</Heading4>
                <PageHeader title="Clients Overview" description="Manage your client list and their information" breadcrumbs={[{
                label: 'Dashboard',
                href: '#'
              }, {
                label: 'Clients'
              }]} actions={<Button leftIcon={<PlusIcon className="h-4 w-4" />}>
                      Add Client
                    </Button>} />
              </Card>
              <Card className="p-6">
                <Heading4 className="mb-4">Section Header</Heading4>
                <SectionHeader title="Recent Sessions" description="Sessions from the past 30 days" actions={<Button variant="outline" size="sm">
                      View All
                    </Button>} />
              </Card>
              <Card className="p-6">
                <Heading4 className="mb-4">App Header</Heading4>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <AppHeader logo={<div className="h-8 w-8 bg-primary-600 rounded-md flex items-center justify-center text-white font-bold">
                        PP
                      </div>} navItems={[{
                  label: 'Dashboard',
                  href: '#',
                  active: false
                }, {
                  label: 'Clients',
                  href: '#',
                  active: true
                }, {
                  label: 'Calendar',
                  href: '#',
                  active: false
                }, {
                  label: 'Messages',
                  href: '#',
                  active: false
                }]} searchInput={<SearchInput placeholder="Search..." />} actions={<NotificationButton count={3} />} userProfile={<DefaultUserProfile name="Dr. Jane Smith" email="jane.smith@example.com" avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />} />
                </div>
              </Card>
            </div>
          </section>
          {/* Layout */}
          <section>
            <Heading2>Layout</Heading2>
            <Text className="mt-2 mb-6">
              Layout components help structure content consistently.
            </Text>
            <div className="space-y-8">
              <Card className="p-6">
                <Heading4 className="mb-4">Container</Heading4>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <Container maxWidth="xl" className="bg-white border border-dashed border-gray-300 p-4 rounded">
                    <Text className="text-center text-gray-500">
                      Container (max-width-xl)
                    </Text>
                  </Container>
                </div>
              </Card>
              <Card className="p-6">
                <Heading4 className="mb-4">Grid</Heading4>
                <Grid cols={{
                default: 1,
                sm: 2,
                md: 3,
                lg: 4
              }} className="mb-4">
                  {[1, 2, 3, 4].map(item => <div key={item} className="bg-gray-100 p-4 rounded text-center">
                      Item {item}
                    </div>)}
                </Grid>
                <Text className="text-sm text-gray-500 mb-2">
                  Responsive grid: 1 column on mobile, 2 on small screens, 3 on
                  medium, 4 on large
                </Text>
              </Card>
              <Card className="p-6">
                <Heading4 className="mb-4">Flex</Heading4>
                <div className="space-y-4">
                  <Flex justify="between" align="center" className="bg-gray-100 p-4 rounded">
                    <div className="bg-white p-2 rounded">Item 1</div>
                    <div className="bg-white p-2 rounded">Item 2</div>
                    <div className="bg-white p-2 rounded">Item 3</div>
                  </Flex>
                  <Flex direction="col" gap="4" className="bg-gray-100 p-4 rounded">
                    <div className="bg-white p-2 rounded">Column Item 1</div>
                    <div className="bg-white p-2 rounded">Column Item 2</div>
                    <div className="bg-white p-2 rounded">Column Item 3</div>
                  </Flex>
                </div>
              </Card>
              <Card className="p-6">
                <Heading4 className="mb-4">Divider</Heading4>
                <div className="space-y-6">
                  <div>
                    <Text className="mb-4">Text before divider</Text>
                    <Divider />
                    <Text className="mt-4">Text after divider</Text>
                  </div>
                  <Divider label="Or continue with" />
                  <Flex className="h-24 bg-gray-100 rounded">
                    <div className="p-4">Left content</div>
                    <Divider orientation="vertical" className="mx-4" />
                    <div className="p-4">Right content</div>
                  </Flex>
                </div>
              </Card>
              <Card className="p-6">
                <Heading4 className="mb-4">Box</Heading4>
                <div className="space-y-4">
                  <Box p={4} bg="gray-100" rounded="lg">
                    Basic box with padding and background
                  </Box>
                  <Box p={4} border="2" borderColor="primary-500" rounded="lg">
                    Box with border
                  </Box>
                  <Box p={4} shadow="lg" rounded="lg">
                    Box with shadow
                  </Box>
                </div>
              </Card>
            </div>
          </section>
          {/* Modals */}
          <section>
            <Heading2>Modals & Dialogs</Heading2>
            <Text className="mt-2 mb-6">
              Modal components for displaying content that requires user
              attention.
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <CardTitle>Basic Modal</CardTitle>
                <CardDescription>
                  A centered modal dialog for important content
                </CardDescription>
                <div className="mt-4">
                  <Button onClick={() => setIsModalOpen(true)}>
                    Open Modal
                  </Button>
                </div>
              </Card>
              <Card className="p-6">
                <CardTitle>Confirmation Dialog</CardTitle>
                <CardDescription>
                  A specialized modal for confirming actions
                </CardDescription>
                <div className="mt-4">
                  <Button variant="danger" onClick={() => setIsDialogOpen(true)}>
                    Delete Item
                  </Button>
                </div>
              </Card>
              <Card className="p-6">
                <CardTitle>Slide-over Drawer</CardTitle>
                <CardDescription>
                  A side panel that slides in from the edge
                </CardDescription>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => setIsDrawerOpen(true)}>
                    Open Drawer
                  </Button>
                </div>
              </Card>
            </div>
            {/* Modal examples */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Modal Example" footer={<>
                  <Button onClick={() => setIsModalOpen(false)}>
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                </>}>
              <div className="space-y-4">
                <Text>
                  This is an example modal dialog. It can contain any content
                  you need.
                </Text>
                <Input label="Example Input" placeholder="Enter some text" />
              </div>
            </Modal>
            <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onConfirm={() => {
            // Handle confirm action
            setIsDialogOpen(false);
          }} title="Confirm Deletion" confirmText="Delete" confirmVariant="danger">
              <Text>
                Are you sure you want to delete this item? This action cannot be
                undone.
              </Text>
            </Dialog>
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Drawer Example" footer={<Button onClick={() => setIsDrawerOpen(false)}>Close</Button>}>
              <div className="space-y-4">
                <Text>
                  This is an example drawer that slides in from the side.
                </Text>
                <Text>
                  It's useful for side panels, filters, or detail views.
                </Text>
              </div>
            </Drawer>
          </section>
        </div>
      </main>
    </div>;
};