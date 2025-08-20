import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";  
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Database, Play, Settings } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 relative">
      {/* Main Grid Layout */}
      <div className="h-screen max-h-screen grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          
          {/* Database Connection Setup */}
          <Card className="glass-panel flex-shrink-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Database className="w-5 h-5" />
                Database Connection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="connection-type">Connection Type</Label>
                  <Select>
                    <SelectTrigger id="connection-type" className="bg-muted/50">
                      <SelectValue placeholder="Select connection type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      <SelectItem value="sql-server">SQL Server</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="auth-method">Authentication Method</Label>
                  <Select>
                    <SelectTrigger id="auth-method" className="bg-muted/50">
                      <SelectValue placeholder="Select authentication" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      <SelectItem value="username-password">Username / Password</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="server">Server/Host</Label>
                  <Input id="server" placeholder="localhost" className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="port">Port</Label>
                  <Input id="port" placeholder="1433" className="bg-muted/50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="database">Database Name</Label>
                  <Input id="database" placeholder="master" className="bg-muted/50" />
                </div>
                <div className="space-y-2 flex flex-col justify-end">
                  <div className="flex items-center space-x-2 h-10">
                    <Checkbox id="trust-cert" defaultChecked />
                    <Label htmlFor="trust-cert" className="text-sm font-normal">
                      Trust Server Certificate?
                    </Label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="sa" className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" className="bg-muted/50" />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Settings className="w-4 h-4 mr-2" />
                  Test Connection
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Query Results */}
          <Card className="glass-panel flex-1 min-h-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-accent">Query Results</CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <ScrollArea className="h-full w-full">
                <div className="p-4 text-center text-muted-foreground">
                  <div className="border-2 border-dashed border-muted rounded-lg p-8">
                    <Database className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">No Rows Returned!</p>
                    <p className="text-sm mt-2">Run a query to see results here</p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - SQL Query Editor */}
        <Card className="glass-panel flex flex-col min-h-0">
          <CardHeader className="pb-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-primary">SQL Query Editor</CardTitle>
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Play className="w-4 h-4 mr-2" />
                Run Query
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 min-h-0">
            <ScrollArea className="h-full w-full">
              <div className="min-h-full bg-muted/20 rounded-md p-4 font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-primary">--</span> Enter your SQL query here
                </div>
                <div className="mt-2">
                  <span className="text-blue-400">SELECT</span> * <span className="text-blue-400">FROM</span> users;
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Lovable Badge - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-10">
        <div className="glass-panel px-3 py-2 text-xs text-muted-foreground">
          Built with ❤️ on Lovable
        </div>
      </div>
    </div>
  );
};

export default Index;
