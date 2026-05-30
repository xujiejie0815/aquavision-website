# AquaVision Inc. — Website

XR × アート × 文化体験を手がける AquaVision 株式会社のコーポレートサイト（バイリンガル / JA・EN）。

## 構成
- `index.html` — トップページ（React + Babel、ヒーローのCanvasビジュアル、各セクション）
- `competence.html` — Competence（ケイパビリティ）
- `news.html` + `news/01–05.html` — News 一覧・詳細
- `recruit.html` — 採用
- `assets/` — 画像・ロゴ
- `styles.css` / `subpage.css` — スタイル
- `*.jsx` — トップページのコンポーネント（ブラウザ上でBabelが変換）
- `i18n-subpage.js` — サブページのJA/EN切り替え

## GitHub Pages での公開手順（仮公開）
1. GitHub で新しいリポジトリを作成
2. このフォルダ内のファイルを **そのままのフォルダ構成で** リポジトリ直下に push
   （`index.html` がリポジトリのルートに来るようにしてください）
3. リポジトリの **Settings → Pages** を開く
4. **Source** を「Deploy from a branch」、**Branch** を `main` / `/(root)` に設定して Save
5. 数分後、`https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます

> ビルド不要。すべてブラウザ上で動作します（静的ホスティングのみでOK）。

## 注意
- `index.html` は React/Babel を CDN から読み込みます（オンライン環境が前提）。
- 完全オフラインで配布したい場合は、別途お渡しの `AquaVision Website (offline).html` をご利用ください。
