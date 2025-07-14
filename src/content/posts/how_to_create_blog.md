---
title: Astroでブログを構築してみた
published: 2025-07-15
description: '今回はAstroのテンプレート「Fuwari」を使ってブログを構築してみましたのでその備忘録です。'
image: ''
tags: ['astro', 'blog', 'fuwari', '備忘録']
category: '技術'
draft: false 
lang: 'ja'
---

# Astroでブログを構築してみた

――今回はAstroのテンプレート「Fuwari」を使ってブログを構築してみましたのでその備忘録です。

## きっかけ
最近ブログ**もどき**をHTML+CSS+JSのみで構築してみたりして遊んでいたんですが、そろそろちゃんとしたブログが欲しかったのと、一つちゃんとなにか学びたかったのもあって、今話題のAstroを使ってブログを構築してみよう！と思ったのがきっかけでした。
テーマはfuwariというものを選びました([Demo](https://fuwari.vercel.app/))。eruditeというテーマとめちゃくちゃ迷ったんですが、ブログを書きたいだけというのも合って、シンプルかつ構築のしやすいfuwariを選択しました。

## 準備
Fuwariのインストール時に依存関係とか必要なものは自動インストールされるので、ここではnode.jsのインストールのみですね
[Node.js公式サイト](https://nodejs.org/ja)
ここからインストーラーをダウンロードしてきてインストール。
"npm version"と打ってみて、ちゃんとインストールされているか確認しておきましょう。

## Fuwariのインストール
ここからは[Fuwari](https://github.com/saicaca/fuwari)のインストールになるのですが、基本的に[Fuwari公式Docs](https://github.com/saicaca/fuwari/blob/main/docs/README.ja.md)を参考にすれば大丈夫です。
```bash
npm install -g pnpm
pnpm create fuwari@latest
```
あとはお好みで(基本yのままで)選択していけばインストールできます。終わったら、
```bash
cd <Your-Project-Name>
pnpm install
```
で依存関係をインストールして、Fuwariの導入は終了です。

## カスタマイズ
基本的にはsrc/config.tsを編集することでカスタマイズできます。
```ts
import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Fuwari",
	subtitle: "Demo Site",
	lang: "ja", //言語の選択。 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'　より
	themeColor: {
		hue: 250, // デフォルトのテーマカラー。僕は255にしました。
		fixed: false, // カラーピッカーの表示のON/OFF
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // /publicディレクトリ内の相対パスです。アイコンはお好みで変更してね。
		position: "center", // 'top', 'center', 'bottom'のいずれか。'center'がデフォルト
		credit: {
			enable: false, // タイトルの表示のON/OFF
			text: "", // タイトルの表示テキスト
			url: "", // (Optional) URLリンクの表示
		},
	},
	toc: {
		enable: true, // 目次表示のON/OFF
		depth: 2, // 目次の最大階層数。1から3までの数字を指定できます。
	},
	favicon: [
		// ここを空にしておくとデフォルトのfaviconが表示されます。
		// {
		//   src: '/favicon/icon.png',    // /publicディレクトリ内の相対パスです。
		//   theme: 'light',              // ライトテーマとダークテーマで違うファビコンを設定できます。
		//   sizes: '32x32',              // サイズの指定。
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // ここらへんはお好みでどうぞ。
			icon: "fa6-brands:github",
			external: true, // 外部リンクの場合はtrueを指定してください。
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // /publicディレクトリ内の相対パスです。アイコンはお好みで変更してね。
	name: "Lorem Ipsum",
	bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // https://icones.js.org/ でアイコンコードを検索できます。
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
```
こんなかんじ。

## Markdown
いままでマークダウンにあまり触れてこない人生を歩んできた身として、かなり新鮮でした。今この文章もマークダウンで書いていますが、結構慣れてきた...かな？いやそんなこともないか。
この言語(...なのか？)を開発した人絶対頭いいと思います。

## 公開
ここは私もよくわかっていないので割愛しますが、注意点として[Astro公式](https://docs.astro.build/ja/guides/deploy/)のデプロイ方法でやってねとのこと。
私はnetlifyで公開するので、netlify用のガイドに従ってやってみたので、皆さんはご自身の使用するサービス等に合わせてやってみてください。

## まとめ
Fuwariのテーマ自体がかなり完成されているのもあって、本当にすぐにブログを構築できました。
いつか自分でテーマから自作してちゃんとしたブログを構築するのは夢ですが、今はこのままで行きたいと思います。
それではまた次会うときに。またね。

::github{repo="lineside0418/Blog"}

> ### Sources of images used in this post
> - [Fuwari Templete](https://github.com/saicaca/fuwari)
> - [Docs](https://github.com/saicaca/fuwari/blob/main/docs/README.ja.md)
> - [Astro](https://astro.build)

---