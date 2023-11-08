{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
	buildInputs = with pkgs; [
		deno
		nodePackages.prettier
		python3
	];
}
