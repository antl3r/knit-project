import { KnitServer } from "@rbxts/knit";
import "./services";

KnitServer.Start();

const testService = KnitServer.GetService("TestService");
testService.echo("Hello!");
