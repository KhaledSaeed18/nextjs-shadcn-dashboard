import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GeneralSettingsPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">General Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and settings</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-4 w-full md:w-2/3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="language">Language</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and profile picture
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button size="sm">Upload new picture</Button>
                  <Button size="sm" variant="outline">Remove picture</Button>
                  <p className="text-xs text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="johndoe" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" placeholder="Tell us about yourself" />
                  <p className="text-sm text-muted-foreground">Brief description for your profile.</p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Security Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified about security issues
                      </p>
                    </div>
                    <Switch id="security-email" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Account Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified about account activity
                      </p>
                    </div>
                    <Switch id="account-email" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Newsletter</p>
                      <p className="text-sm text-muted-foreground">
                        Receive our newsletter with updates and features
                      </p>
                    </div>
                    <Switch id="newsletter" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Security Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        Get push notifications for security issues
                      </p>
                    </div>
                    <Switch id="security-push" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Account Activity</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified about login attempts
                      </p>
                    </div>
                    <Switch id="account-push" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Updates & Features</p>
                      <p className="text-sm text-muted-foreground">
                        Learn about new features and updates
                      </p>
                    </div>
                    <Switch id="updates-push" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize how the application looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Theme</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 cursor-pointer flex flex-col items-center space-y-2 bg-background hover:border-primary">
                    <div className="w-full h-24 rounded bg-background border"></div>
                    <p className="font-medium">Light</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer flex flex-col items-center space-y-2 bg-background hover:border-primary">
                    <div className="w-full h-24 rounded bg-zinc-800"></div>
                    <p className="font-medium">Dark</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer flex flex-col items-center space-y-2 bg-background hover:border-primary">
                    <div className="w-full h-24 rounded bg-background border">
                      <div className="h-1/2 w-full bg-zinc-800"></div>
                    </div>
                    <p className="font-medium">System</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Color Scheme</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 cursor-pointer flex flex-col items-center space-y-2 bg-background hover:border-primary">
                    <div className="w-full h-8 rounded bg-blue-500"></div>
                    <p className="font-medium">Blue</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer flex flex-col items-center space-y-2 bg-background hover:border-primary">
                    <div className="w-full h-8 rounded bg-green-500"></div>
                    <p className="font-medium">Green</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer flex flex-col items-center space-y-2 bg-background hover:border-primary">
                    <div className="w-full h-8 rounded bg-purple-500"></div>
                    <p className="font-medium">Purple</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Reduce animations</p>
                    <p className="text-sm text-muted-foreground">
                      Use fewer animations throughout the interface
                    </p>
                  </div>
                  <Switch id="reduce-animations" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Compact mode</p>
                    <p className="text-sm text-muted-foreground">
                      Display elements closer together for more dense UI
                    </p>
                  </div>
                  <Switch id="compact-mode" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Appearance</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Language & Region</CardTitle>
              <CardDescription>
                Set your language and regional preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Interface Language</Label>
                  <Select defaultValue="en-US">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en-US">English (United States)</SelectItem>
                      <SelectItem value="en-GB">English (United Kingdom)</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Time Zone</Label>
                  <Select defaultValue="utc-5">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select time zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                      <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                      <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                      <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                      <SelectItem value="utc+0">Greenwich Mean Time (UTC+0)</SelectItem>
                      <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                      <SelectItem value="utc+8">China Standard Time (UTC+8)</SelectItem>
                      <SelectItem value="utc+9">Japan Standard Time (UTC+9)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <Select defaultValue="mm-dd-yyyy">
                    <SelectTrigger id="date-format">
                      <SelectValue placeholder="Select date format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="jpy">JPY (¥)</SelectItem>
                      <SelectItem value="cad">CAD (C$)</SelectItem>
                      <SelectItem value="aud">AUD (A$)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

