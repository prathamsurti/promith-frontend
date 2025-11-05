import { useState } from 'react';
import Button, { ButtonLink } from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const ComponentShowcase = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen section-padding bg-gray-50">
      <div className="container-custom max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Component Showcase</h1>
          <p className="text-xl text-gray-600">
            Priority 1 UI Components - Phase 2
          </p>
        </div>

        <div className="space-y-12">
          {/* Button Component */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Button Component</h2>
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  All button variants with different sizes and states
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Primary Buttons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Primary</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary" size="sm">
                        Small
                      </Button>
                      <Button variant="primary" size="md">
                        Medium
                      </Button>
                      <Button variant="primary" size="lg">
                        Large
                      </Button>
                      <Button variant="primary" disabled>
                        Disabled
                      </Button>
                      <Button
                        variant="primary"
                        loading={loading}
                        onClick={handleLoadingDemo}
                      >
                        {loading ? 'Loading...' : 'Click to Load'}
                      </Button>
                    </div>
                  </div>

                  {/* Secondary Buttons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Secondary</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="secondary" size="sm">
                        Small
                      </Button>
                      <Button variant="secondary" size="md">
                        Medium
                      </Button>
                      <Button variant="secondary" size="lg">
                        Large
                      </Button>
                    </div>
                  </div>

                  {/* Outline Buttons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Outline</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" size="sm">
                        Small
                      </Button>
                      <Button variant="outline" size="md">
                        Medium
                      </Button>
                      <Button variant="outline" size="lg">
                        Large
                      </Button>
                    </div>
                  </div>

                  {/* Ghost Buttons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Ghost</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="ghost" size="sm">
                        Small
                      </Button>
                      <Button variant="ghost" size="md">
                        Medium
                      </Button>
                      <Button variant="ghost" size="lg">
                        Large
                      </Button>
                    </div>
                  </div>

                  {/* Link Buttons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Link</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="link">Link Button</Button>
                      <ButtonLink variant="primary" to="/">
                        Router Link
                      </ButtonLink>
                      <ButtonLink variant="outline" href="https://google.com">
                        External Link
                      </ButtonLink>
                    </div>
                  </div>

                  {/* With Icons */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">With Icons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        variant="primary"
                        icon={
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        }
                        iconPosition="left"
                      >
                        Add Item
                      </Button>
                      <Button
                        variant="outline"
                        icon={
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        }
                        iconPosition="right"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Input Component */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Input Component</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Inputs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    helperText="We'll never share your email"
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                  <Input
                    label="Disabled Input"
                    placeholder="This is disabled"
                    disabled
                    value="Disabled value"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>With Icons & Errors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    label="Search"
                    placeholder="Search..."
                    icon={
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    }
                    iconPosition="left"
                  />
                  <Input
                    label="Username"
                    placeholder="johndoe"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    error={
                      inputValue && inputValue.length < 3
                        ? 'Username must be at least 3 characters'
                        : ''
                    }
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Textarea Component */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Textarea Component</h2>
            <Card>
              <CardHeader>
                <CardTitle>Textarea Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Textarea
                    label="Message"
                    placeholder="Write your message..."
                    helperText="Be as detailed as possible"
                    rows={4}
                  />
                  <Textarea
                    label="Bio"
                    placeholder="Tell us about yourself..."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    maxLength={200}
                    showCount
                    rows={4}
                  />
                  <Textarea
                    label="Comments"
                    placeholder="No resize"
                    resize="none"
                    rows={3}
                  />
                  <Textarea
                    label="Error Example"
                    placeholder="This has an error"
                    error="This field is required"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Card Component */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Card Component</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default</CardTitle>
                  <CardDescription>Standard card style</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This is the default card variant with standard border.
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Bordered</CardTitle>
                  <CardDescription>Thicker border</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This card has a 2px border for more emphasis.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Elevated</CardTitle>
                  <CardDescription>With shadow</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This card has a shadow for depth effect.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardHeader>
                  <CardTitle>Glass</CardTitle>
                  <CardDescription>Frosted glass</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Glassmorphism effect with backdrop blur.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card hover>
                <CardHeader>
                  <CardTitle>Hover Effect</CardTitle>
                  <CardDescription>Try hovering over this card</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This card has hover animation with lift effect.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card variant="elevated" padding="lg">
                <CardHeader>
                  <CardTitle>Large Padding</CardTitle>
                  <CardDescription>More spacious layout</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This card uses large padding for better breathing room.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Badge Component */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Badge Component</h2>
            <Card>
              <CardHeader>
                <CardTitle>Badge Variants</CardTitle>
                <CardDescription>Different colors and sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* All Variants */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Variants</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="default">Default</Badge>
                      <Badge variant="primary">Primary</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="error">Error</Badge>
                      <Badge variant="info">Info</Badge>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Sizes</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="primary" size="sm">
                        Small
                      </Badge>
                      <Badge variant="primary" size="md">
                        Medium
                      </Badge>
                      <Badge variant="primary" size="lg">
                        Large
                      </Badge>
                    </div>
                  </div>

                  {/* Rounded Options */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Shapes</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="success" rounded>
                        Rounded Full
                      </Badge>
                      <Badge variant="success" rounded={false}>
                        Rounded MD
                      </Badge>
                      <Badge variant="info" withBorder={false}>
                        No Border
                      </Badge>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">Status:</span>
                        <Badge variant="success">Active</Badge>
                        <Badge variant="warning">Pending</Badge>
                        <Badge variant="error">Inactive</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">Tags:</span>
                        <Badge variant="primary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="info">Tailwind</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">Count:</span>
                        <Badge variant="default">12 New</Badge>
                        <Badge variant="primary">5 Messages</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <ButtonLink variant="outline" to="/">
            ← Back to Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
