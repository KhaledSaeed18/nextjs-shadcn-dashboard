import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function SecurityPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Security Settings</h1>
        <p className="text-muted-foreground">Manage your account security and preferences</p>
      </div>

      <Tabs defaultValue="password" className="w-full">
        <TabsList className="grid grid-cols-4 w-full md:w-2/3">
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="2fa">Two-Factor Auth</TabsTrigger>
          <TabsTrigger value="sessions">Active Sessions</TabsTrigger>
          <TabsTrigger value="history">Login History</TabsTrigger>
        </TabsList>

        <TabsContent value="password" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password to keep your account secure.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button className="mt-4">Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="2fa" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>
                Add an extra layer of security to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Authenticator App</p>
                  <p className="text-sm text-muted-foreground">
                    Use an authenticator app to generate one-time codes
                  </p>
                </div>
                <Switch id="2fa-app" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS Authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Receive a code via SMS to verify your identity
                  </p>
                </div>
                <Switch id="2fa-sms" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Receive a code via email to verify your identity
                  </p>
                </div>
                <Switch id="2fa-email" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
              <CardDescription>
                Manage your active sessions across devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    device: "Windows PC",
                    location: "New York, USA",
                    ip: "192.168.1.1",
                    lastActive: "Active now",
                    current: true
                  },
                  {
                    device: "iPhone 13",
                    location: "Boston, USA",
                    ip: "192.168.1.2",
                    lastActive: "3 hours ago",
                    current: false
                  },
                  {
                    device: "MacBook Pro",
                    location: "San Francisco, USA",
                    ip: "192.168.1.3",
                    lastActive: "2 days ago",
                    current: false
                  }
                ].map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{session.device}</p>
                        {session.current && <Badge variant="outline">Current</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{session.ip} • {session.location}</p>
                      <p className="text-sm text-muted-foreground">{session.lastActive}</p>
                    </div>
                    {!session.current && (
                      <Button variant="destructive" size="sm">End Session</Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Login History</CardTitle>
              <CardDescription>
                View your recent account access history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md divide-y">
                  {[
                    {
                      device: "Windows PC",
                      browser: "Chrome",
                      location: "New York, USA",
                      time: "Today, 10:30 AM",
                      status: "Successful"
                    },
                    {
                      device: "iPhone 13",
                      browser: "Safari",
                      location: "Boston, USA",
                      time: "Yesterday, 8:15 PM",
                      status: "Successful"
                    },
                    {
                      device: "Unknown Device",
                      browser: "Firefox",
                      location: "Chicago, USA",
                      time: "Jul 15, 2023, 3:45 PM",
                      status: "Failed"
                    },
                    {
                      device: "MacBook Pro",
                      browser: "Safari",
                      location: "San Francisco, USA",
                      time: "Jul 12, 2023, 9:20 AM",
                      status: "Successful"
                    }
                  ].map((login, index) => (
                    <div key={index} className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{login.device} • {login.browser}</p>
                          <p className="text-sm text-muted-foreground">{login.location}</p>
                          <p className="text-sm text-muted-foreground">{login.time}</p>
                        </div>
                        <Badge
                          variant={login.status === "Successful" ? "outline" : "destructive"}
                        >
                          {login.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

