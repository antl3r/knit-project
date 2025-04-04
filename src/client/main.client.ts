import { KnitClient } from "@rbxts/knit";

KnitClient.Start();

const testService = KnitClient.GetService("TestService");
testService.echo("Hello!");
