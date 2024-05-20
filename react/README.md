# Reactディレクトリについて

ReactコンポーネントのUIカタログを管理している。

# Storybookの起動

```
npm run storybook
```

# ディレクトリ構成

コンポーネントの粒度に応じて、src配下にあるcomponents, containers, pagesのディレクトリのいずれかに分類した後、コンポーネント用のディレクトリを切り、`.tsx`ファイルと`.stories.ts`を作成する。

たとえば、ボタンコンポーネントであれば、`src/components/button`ディレクトリに`button.tsx`と`button.stories.ts`を作成する。

- `components`: 再利用可能な基本的なコンポーネント（ボタン、インプットフィールドなど）
- `containers`: 複数のcomponentsを組み合わせた、より具体的なコンポーネント（フォーム、リストアイテムなど）
- `pages`: 複数のcontainersを組み合わせて完成するページ

## import時のパスについて

後々のディレクトリ名の変更を考慮して、パスエイリアスによる絶対パスインポートを採用している。

デフォルトは`src`を`@`に置き換えている。

たとえば、`src/components/button/button`をimportしたい場合は、`@/components/button/button`のように指定する。

デフォルトから変えたい場合は、vite.config.tsの以下を変更する。

```
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
},
```

# スタイリング

基本的には、TailwindCSSをベースにスタイリングを行う。

コンポーネントの機能やアクセシビリティなどの実装コストを抑えるため、HeadlessUIとしてRadixUIを採用している。
