import { KnitServer } from "@rbxts/knit";

declare global {
	interface KnitServices {
		TestService: typeof TestService;
	}
}

const TestService = KnitServer.CreateService({
	Name: "TestService",

	Client: {
		echo(player: Player, string: string) {
			print(`Client ${player.Name} said: ${string}`);
		},
	},

	echo(string: string) {
		print(`Server said: ${string}`);
	},

	KnitStart() {
		print("Test server started");
	},
});

export = TestService;
