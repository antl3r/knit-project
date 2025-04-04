import { KnitServer } from "@rbxts/knit";

declare global {
	interface KnitServices {
		TestService: typeof TestService;
	}
}

const TestService = KnitServer.CreateService({
	Name: "TestService",

	Client: {
		echo(player: Player, text: string) {
			print(`Client ${player.Name} said: ${text}`);
		},
	},

	echo(text: string) {
		print(`Server said: ${text}`);
	},

	KnitStart() {
		print("Test server started");
	},
});

export = TestService;
