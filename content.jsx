function RES(p){ return (typeof window!=="undefined" && window.__resources && window.__resources[p]) || p; }
// content.jsx — bilingual copy from official AquaVision text + shared mark

const COPY = {
  ja: {
    nav: {
      vision: "ビジョン", about: "会社概要", services: "コンピテンシー", business: "ビジネス", works: "実績",
      tech: "テクノロジー", news: "ニュース", team: "チーム", contact: "お問い合わせ"
    },
    hero: {
      eyebrow: "AquaVision Inc.  —  Immersive XR Experiences",
      headline_en: "Dive Into\nNew Realities",
      headline_jp: "最先端のXRテクノロジーとアートを融合し、\n現実と仮想を横断する新しい体験価値を創造する\nイマーシブ・テクノロジーカンパニー。",
      stats: [
        { v: "95%+", l: "Visitor Satisfaction" },
        { v: "XR · AI", l: "Core Stack" },
        { v: "Immersive", l: "IP × Culture" }
      ],
      scroll: "Scroll to explore"
    },
    about: {
      label: "01 / About",
      title: "About",
      statement: (<>世界遺産や人気IPを<em>XR化</em>し、都市の"スキマ時間・スキマ空間"を文化体験の舞台へと変える。テクノロジーとアートで、未来の都市型エンターテインメント市場をリードします。</>),
      body: "　　AquaVisionは、最先端のXRテクノロジーとアート表現を融合し、世界中のIP・カルチャー・ブランドを、没入型体験へと再構築するグローバル・イマーシブエンターテインメントカンパニーです。\n　　XRコンテンツの企画・制作をはじめ、空間演出、会場設計、ブランド体験、IPローカライズまでを一気通貫で手掛け、現実と仮想の境界を越える新しいエンターテインメントを創造しています。\n　　また、日本IPの海外展開や、海外IPのローカライズ展開を通じて、XRという新たなメディアで、国境を越える体験価値を世界へ発信しています。",
      meta: [
        ["社名", "AquaVision株式会社  /  AquaVision Inc."],
        ["設立", "2024年3月"],
        ["代表者", "代表取締役CEO  Stephanie Fu（付 斯瑶）"],
        ["本社オフィス", "〒105-6415\n東京都港区虎ノ門1丁目17-1\n虎ノ門ヒルズビジネスタワー 15階"],
        ["登記住所", "〒162-0844\n東京都新宿区市谷八幡町8番地\nTKP市ヶ谷ビル2F"],
        ["事業", "XR・VRコンテンツ制作\n IP・アーティストコラボレーション\nブランド向けXR体験設計\nイマーシブ空間・イベント演出\nIPローカライズ・グローバル展開支援"]
      ]
    },
    vision: {
      label: "VISION  /  MISSION",
      vision_h: "Dive into New Realities.",
      vision_jp: "私たちは、最新のテクノロジーとアートを融合させることで、人々が時間と空間の制約を超えて、新たな世界を探索できる未来を創造します。",
      mission_h: "Mission",
      mission_jp: "没入型体験を通じて世界中の人々に感動と驚きを提供し、新しい文化的価値を創出する。国際的なIPマネジメント、アーティストとの協業、最新技術を駆使したコンテンツ開発を通じて、未来のエンターテイメント市場を牽引していきます。"
    },
    services: {
      label: "05 / Competence",
      title: "Competence",
      lede: "世界中の資産とリソースを活用し、独創的なアイデアと最先端技術を組み合わせ、新たな文化的価値を創出します。",
      items: [
        { num: "C—01", en: "Creativity", jp: "創造力", body: "世界中の資産とリソースを活用し、独創的なアイデアと最先端技術を組み合わせ、新たな文化的価値を創出します。", tags: ["IP × Art", "Concept", "R&D"] },
        { num: "C—02", en: "Large Scale", jp: "大型スケール", body: "圧倒的なスケール感とビジュアルで、観客を魅了する没入型エンターテイメントを実現します。", tags: ["Architecture", "Production", "Spatial"] },
        { num: "C—03", en: "Multi-Sensor Immersion", jp: "没入型 × マルチセンサー", body: "リアルとバーチャルが融合するストーリーテリングと空間デザインで、映像・音響・触覚を含む五感を刺激し、観客一人ひとりに深い没入体験をもたらします。", tags: ["Spatial Audio", "Haptic", "Narrative"] },
        { num: "C—04", en: "Cutting-edge Technology", jp: "最先端テクノロジー", body: "XR・AI・インタラクティブ技術で、ストーリーをよりリアルに、より鮮明に。リアルタイムレンダリングから生成AI、立体音響、モジュール施工までを内製。", tags: ["XR", "AI", "Realtime", "Spatial Audio", "Modular"] },
        { num: "C—05", en: "Total Art", jp: "総合芸術", body: "アート、テクノロジー、建築、デザインを統合し、唯一無二のエンターテイメント空間を創り出します。", tags: ["Art", "Design", "Built Env."] },
      ]
    },
    business: {
      label: "04 / Business",
      title: "Business",
      lede: "XR / VR体験、IPコンテンツ、マーケティングを横断し、新しいエンターテインメント体験を展開しています。",
      items: [
        {
          num: "01",
          en: "XR Content Production",
          jp: "XRのコンテンツ企画・制作・運営",
          body: "XRコンテンツの企画から技術制作、空間設計、会場演出、運営までを一気通貫で提供。展覧会・POPUP・常設施設など、フォーマットを問わず最適なイマーシブ体験を構築します。",
          image: RES("assets/vr-arena-layout.png"),
          imageCap: "Prado VR Arena  ·  Venue layout",
          capabilities: [
            "XR / VRコンテンツ制作",
            "XR空間・会場設計",
            "XR / VRのPOPUPイベント企画・運営",
            "VR体験施設運営",
            "グッズ・オリジナル商品開発"
          ]
        },
        {
          num: "02",
          en: "Global IP Localization",
          jp: "XRのグローバルIPのローカライズ・世界展開",
          body: "世界的IPを日本へ、日本のIPを世界へ。XRという新たなメディアを通じて再解釈し、国境を越える文化体験を共創します。",
          image: RES("assets/ip-corridor.png"),
          imageCap: "Prado VR  ·  Masterpiece corridor",
          capabilities: [
            "グローバルIPのXR / VRコンテンツマネジメント",
            "海外IPのXR / VRローカライズ展開",
            "日本IPのXR / VRグローバル展開支援"
          ]
        },
        {
          num: "03",
          en: "XR / VR Marketing",
          jp: "XR/VRマーケティング",
          body: "ブランドの世界観を、ポップアップ・常設施設に拡張する没入型ブランドエクスペリエンス。ブランドを「説明される対象」から「身体で出会う体験」へ。",
          image: RES("assets/vr-marketing.jpg"),
          imageCap: "Immersive Brand Experience",
          capabilities: [
            "XR/VRを使用した広告・マーケティング企画・施策",
            "XR/VRを使用したブランド体験コンテンツ"
          ]
        }
      ]
    },
    works: {
      label: "03 / Works",
      title: "Work",
      lede: "AquaVisionは、IPとブランド体験を軸に、多様なVR・XR実績を展開しています。",
      segments: [
        {
          tag: "VR EXHIBITION",
          eyebrow: "01  /  VR EXHIBITION",
          title: "VR体験型展覧会",
          lede: "世界的名画・文化遺産を題材に、観客が「作品の内側」へ入る体験を制作。各都市を巡回する大型展覧会フォーマット。",
          ctaUrl: "https://prtimes.jp/main/html/rd/p/000000488.000024137.html",
          itemKeys: ["artmasters"]
        },
        {
          tag: "VR EXPERIENCE STORE",
          eyebrow: "02  /  VR EXPERIENCE STORE",
          title: "VR体験施設",
          comingSoon: true,
          lede: "都市型の常設VR体験空間として、多彩なVRコンテンツを展開。日常の中で、誰もが気軽に没入体験を楽しめる新しいエンターテインメント空間を提供します。",
          itemKeys: ["xrstore"]
        }
      ],
      items: [
        {
          key: "artmasters",
          image: RES("assets/work-artmasters.png"),
          gallery: [RES("assets/work-artmasters.png"), RES("assets/work-artmasters-2.jpg"), RES("assets/work-artmasters-3.jpg"), RES("assets/work-artmasters-1.png")],
          tag: "VR EXHIBITION",
          title: "Art Masters",
          jp: "プラド美術館所蔵品VR展",
          year: "2025—",
          venue: "Tokyo (Tokyo Tower)",
          tagline: "",
          intro: "名画を「外側から見る時代」から、「内側へと旅する時代」へ。",
          body: "『Art Masters ： プラド美術館所蔵品VR展』が、ついに日本へ。ヒエロニムス・ボス『快楽の園』、ディエゴ・ベラスケス『ラス・メニーナス』など、世界的傑作の内側にVRで入り込む、新感覚のVRイマーシブ体験です。\n\n伝統的な美術鑑賞のスタイルを根本から再定義し、原画では到達できない感覚を、空間・音響・身体の動きを通じて体験できます。2025年に上海で行われた初回展では来場者満足度95%以上を記録。",
          meta: [
            ["総括プロデューサー", "AquaVision"],
            ["制作パートナー", "Acciona Living & Culture"],
            ["ライセンサー", "Museo del Prado"],
            ["共催", "TKP"],
            ["協力", "東京タワー"],
            ["後援", "スペイン大使館 · AECID · Cooperación Española"]
          ]
        },
        {
          key: "xrstore",
          tag: "VR EXPERIENCE STORE",
          title: "VR体験施設",
          jp: "Story Dive Theatre WAHHHP",
          year: "2026—",
          venue: "Tokyo (Shinjuku)",
          tagline: "",
          intro: "日常の中で多彩なVR体験に触れられる、都市型の常設VR施設。",
          body: "AquaVisionが展開する、常設型のVR体験施設。複数のVRコンテンツを常時体験できる空間として、日常の中でVRに触れられる新しいエンターテインメント拠点を目指しています。\n\nアクション、ファンタジー、アートなど、作品ごとに異なる\"物語世界\"へ入り込める「ストーリーダイブ・シアター」型体験を展開。最先端のVR技術と空間演出を融合し、まるで\"物語\"の中に入り込むような没入体験を提供します。\n\n継続的なコンテンツ更新により、リピーター創出と話題性を両立する、新しいVRエンターテインメント空間を構築します。第一弾は東京・新宿にて展開予定。詳細はNewsにて順次公開予定です。",
          meta: [
            ["Status", "準備中  /  Coming Soon"],
            ["Area", "Tokyo (Shinjuku)"]
          ]
        }
      ]
    },
    tech: {
      label: "05 / Technology",
      title: "Technology",
      lede: "XR・AI・インタラクティブ。商用化の見えている技術と、まだ誰も見ていない技術を、両方扱います。",
      items: [
        { num: "T—01", en: "Volumetric Capture", jp: "ボリュメトリック撮影", k: "Reality → Volume" },
        { num: "T—02", en: "Real-time XR Rendering", jp: "リアルタイムXRレンダリング", k: "Unreal / Unity" },
        { num: "T—03", en: "Generative AI Pipeline", jp: "生成AIパイプライン", k: "Diffusion · LLM" },
        { num: "T—04", en: "Spatial Audio Design", jp: "立体音響設計", k: "Ambisonics" },
        { num: "T—05", en: "Multi-user Sync Networking", jp: "マルチユーザー同期", k: "Edge Realtime" },
        { num: "T—06", en: "Modular Sustainable Build", jp: "再利用可能なモジュール施工", k: "Recyclable / Low-energy" },
      ]
    },
    news: {
      label: "02 / News",
      title: "News",
      items: [
        { date: "2026.02.17", cat: "MEDIA", catCls: "media", title: "J:COMにて取材いただきました" },
        { date: "2026.02.06", cat: "PARTNER", catCls: "partner", title: "AquaVision株式会社と株式会社MRXが業務提携" },
        { date: "2025.12.23", cat: "EXHIBITION", catCls: "exhibition", title: "「Art Masters：プラド美術館所蔵品VR展」を東京タワーにて開催" },
        { date: "2025.10.31", cat: "PARTNER", catCls: "partner", title: "TKP、VR事業に参入　AquaVisionへ出資し、関連会社へ" },
        { date: "2024.03.01", cat: "COMPANY", catCls: "company", title: "AquaVision株式会社を設立しました" }
      ],
      more: "View all news"
    },
    partners: {
      label: "07 / Partners",
      title: "Partners",
      lede: "",
      items: [
        { name: "TKP", sub: "資本・業務提携", logo: RES("assets/logo-tkp.png") }
      ]
    },
    team: {
      label: "06 / Team",
      title: "Team",
      lede: "アート、エンジニアリング、ビジネス。多国籍の少数精鋭。",
      items: [
        { role: "Founder · CEO", en: "Stephanie Fu", jp: "付 斯瑶",
          bio: "　　AquaVision創業者 兼 代表取締役CEO。慶應義塾大学大学院商学研究科修了（2021年）後、上海と東京を拠点に活動を開始。テクノロジー・アート・文化遺産という三つの領域が交わる地点に事業機会を見出し、AquaVisionを設立。\n　　世界各地に眠る文化遺産のIPライセンスを取得し、最先端のXR技術によって新たな体験へと再構築。場所や環境を問わず、誰もが等しくアクセスできる「持ち運べる文化資源」を世界へ届けることをミッションに掲げる。\n　　その革新的なアプローチは国内外から注目を集め、2025年にはパッションアワード「創造革新賞」を受賞。文化とテクノロジーの融合を通じて、次世代のグローバル文化体験のあり方を切り拓いている。",
          tags: ["Strategy", "IP Licensing", "Global"] },
        { role: "Creative Director", en: "Aiko Sasaki", jp: "佐々木 愛子",
          bio: "演出家・アートディレクター。劇場演出・現代アート・XR体験設計の三領域を横断するキャリアを持ち、AquaVision全作品のクリエイティブ統括を担当。鑑賞者の身体感覚と感情に作用する空間設計を専門とする。",
          tags: ["Direction", "Spatial", "Narrative"] },
        { role: "Marketing · Content Produce", en: "Kenji Nomura", jp: "野村 健児",
          bio: "　　立教大学卒。広告代理店ではコミュニケーションプランナーとして、コンセプト開発や統合マーケティング（IMC）設計に従事。\n　　現在はベンチャー企業を中心に、戦略立案から実行支援まで一貫したマーケティング支援を行っている。データを活用したデジタルマーケティング戦略を強みとする。\n　　2026年1月にAquaVisionへ参画し、マーケティングに加え、コンテンツプロデューサーとしても活動している。",
          tags: ["Marketing", "Strategy", "Content"] }
      ]
    },
    ceo: {
      label: "MESSAGE",
      title: "代表者メッセージ",
      body: "パンデミックを経て、文化・芸術へのアクセス格差はかつてないほどに顕在化しました。高齢者、障がい者、地方居住者、経済的な制約を抱える多くの人々にとって、世界の名作に触れることは今なお遠い現実です。\n\n私たちはこの課題に対し、スペインの「プラド美術館」や「ノートルダム大聖堂」など、世界的文化遺産の知的財産を、最先端のXR技術を活用して没入型VR体験へと再構築し、誰もが等しくアクセスできる「持ち運べる文化資源」として提供しています。\n\n展示施設は、再利用可能なモジュール構造を採用し、短期設営・省エネルギー・リサイクル素材の活用により環境負荷を最小限に抑制。原画の輸送や高額な保険が不要であるため、サステナブルかつ経済的にも再現性の高い文化事業モデルとなっています。\n\n世界のXR市場は2030年に約9,400億ドル規模へ成長すると予測されており、私たちはこの分野において、すでに先行事例を持つユニークなポジションを確立しています。文化体験の普及・地域経済の活性化・教育支援・環境配慮をすべて両立させる、持続可能で国際的にも意義あるプロジェクトを推進してまいります。",
      sign_role: "代表取締役CEO",
      sign_name: "Stephanie Fu"
    },
    contact: {
      eyebrow: "Let's create something",
      line_en: <>Build the <em>next reality</em><br/>with us.</>,
      line_jp: "現実を拡張する次のプロジェクトを、一緒に。",
      cta1: "お問い合わせ",
      cta2: "採用にエントリー",
      meta: [
        ["Email", "info@aquavision.tech"],
        ["Address", "Tokyo, JP"]
      ]
    },
    footer: {
      tag: "",
      cols: [
        { h: "Menu", items: [["Vision", "#vision"], ["About", "#about"], ["Competence", "#services"], ["Business", "#business"], ["Works", "#works"], ["News", "news.html"], ["Team", "#team"], ["Partners", "#partners"], ["Recruit", "recruit.html"]] },
        { h: "Social", items: [["X", "https://x.com/AquaVisionVR"], ["Instagram", "https://www.instagram.com/artmasters.jp/"], ["LINE  (coming soon)", "#"]] }
      ],
      legal: "© 2026 AquaVision Inc.",
      privacy: "Privacy · Terms"
    }
  },

  en: {
    nav: {
      vision: "Vision", about: "About", services: "Competence", business: "Business", works: "Works",
      tech: "Technology", news: "News", team: "Team", contact: "Contact"
    },
    hero: {
      eyebrow: "AquaVision Inc.  —  Immersive XR Experiences",
      headline_en: "Dive Into\nNew Realities",
      headline_jp: "Fusing cutting-edge XR technology with art to cross between the real and the virtual —\nan immersive-technology company creating new experiential value.",
      stats: [
        { v: "95%+", l: "Visitor Satisfaction" },
        { v: "XR · AI", l: "Core Stack" },
        { v: "Immersive", l: "IP × Culture" }
      ],
      scroll: "Scroll to explore"
    },
    about: {
      label: "01 / About",
      title: "About",
      statement: (<>We turn world heritage and popular IP into <em>XR experiences</em>, transforming the in-between spaces of the city into stages for cultural experience.</>),
      body: "AquaVision is a global immersive-entertainment company that fuses cutting-edge XR technology with artistic expression — rebuilding the world's IP, culture and brands into immersive experiences.\n\nFrom XR content planning and production to spatial direction, venue design, brand experiences and IP localization, we handle the full pipeline in-house, creating a new kind of entertainment that crosses the boundary between the real and the virtual.\n\nThrough taking Japanese IP overseas and localizing global IP for new markets, we deliver border-crossing experiential value to the world via the new medium of XR.",
      meta: [
        ["Name", "AquaVision Inc."],
        ["Founded", "March 2024"],
        ["CEO", "Stephanie Fu  /  付 斯瑶"],
        ["Head Office", "1-17-1 Toranomon, Minato-ku, Tokyo 105-6415\nToranomon Hills Business Tower 15F"],
        ["Registered", "8 Ichigaya Hachiman-cho, Shinjuku-ku, Tokyo 162-0844\nTKP Ichigaya Building 2F"],
        ["Business", "XR / VR content production\nIP & artist collaboration\nBrand XR experience design\nImmersive spaces & event production\nIP localization & global expansion"]
      ]
    },
    vision: {
      label: "VISION  /  MISSION",
      vision_h: "Dive into New Realities.",
      vision_jp: "Fusing the latest technology with art, we create a future where people can explore new worlds beyond the constraints of time and space.",
      mission_h: "Mission",
      mission_jp: "Move and inspire people around the world through immersive experiences, and create new cultural value. Through global IP management, artist collaboration, and content development powered by cutting-edge technology, we lead the future entertainment market."
    },
    services: {
      label: "05 / Competence",
      title: "Competence",
      lede: "We combine the world's assets and resources with original ideas and cutting-edge technology to create new cultural value.",
      items: [
        { num: "C—01", en: "Creativity", jp: "Concept × original ideas", body: "Combining global assets, original ideas and cutting-edge technology to create new cultural value.", tags: ["IP × Art", "Concept", "R&D"] },
        { num: "C—02", en: "Large Scale", jp: "Overwhelming presence", body: "Captivating audiences with immersive entertainment at an architectural scale and unforgettable visuals.", tags: ["Architecture", "Production", "Spatial"] },
        { num: "C—03", en: "Multi-Sensor Immersion", jp: "Immersion × multi-sensor", body: "Storytelling and spatial design that fuse the real and the virtual. Visual, audio and haptic — a deep immersive experience for each visitor.", tags: ["Spatial Audio", "Haptic", "Narrative"] },
        { num: "C—04", en: "Cutting-edge Technology", jp: "XR · AI · interactive", body: "XR, AI and interactive tech to make stories more vivid. From real-time rendering and generative AI to spatial audio and modular installations — built in-house.", tags: ["XR", "AI", "Realtime", "Spatial Audio", "Modular"] },
        { num: "C—05", en: "Total Art", jp: "Art × tech × architecture × design", body: "Integrating art, technology, architecture and design to create one-of-a-kind entertainment spaces.", tags: ["Art", "Design", "Built Env."] },
      ]
    },
    business: {
      label: "04 / Business",
      title: "Business",
      lede: "Spanning XR / VR experiences, IP content and marketing, we create new forms of entertainment.",
      items: [
        {
          num: "01",
          en: "XR Content Production",
          jp: "Plan, build & operate",
          body: "End-to-end XR content — from concept and technical build to venue design and on-site operation. We work across exhibitions, pop-ups and permanent venues, selecting the right format for the right experience.",
          image: RES("assets/vr-arena-layout.png"),
          imageCap: "Prado VR Arena  ·  Venue layout",
          capabilities: [
            "VR / XR technical production",
            "XR venue design & build",
            "VR / XR pop-up planning & operation",
            "Permanent VR venue operation",
            "Merchandise development"
          ]
        },
        {
          num: "02",
          en: "Global IP Localization",
          jp: "Bring the world in, take Japan out",
          body: "Global IP into Japan, Japanese IP out to the world. We reinterpret each IP through the XR medium and create cultural experiences that cross borders.",
          image: RES("assets/ip-corridor.png"),
          imageCap: "Prado VR  ·  Masterpiece corridor",
          capabilities: [
            "Global IP management (VR / XR content)",
            "Localization of overseas IP for Japan",
            "Global rollout of Japanese IP"
          ]
        },
        {
          num: "03",
          en: "XR / VR Marketing",
          jp: "Immersive brand experience",
          body: "Extending a brand's world into stores, pop-ups and permanent venues — turning products from 'things explained' into 'things you meet with your body.'",
          image: RES("assets/vr-marketing.jpg"),
          imageCap: "Immersive Brand Experience",
          capabilities: [
            "Advertising & marketing campaigns powered by XR / VR",
            "Brand experience content using XR / VR"
          ]
        }
      ]
    },
    works: {
      label: "03 / Works",
      title: "Work",
      lede: "AquaVision delivers a range of VR / XR work centered on IP and brand experiences.",
      segments: [
        {
          tag: "VR EXHIBITION",
          eyebrow: "01  /  VR EXHIBITION",
          title: "Touring VR Exhibitions",
          lede: "Large-scale touring exhibitions that put visitors inside masterpieces and cultural heritage.",
          ctaUrl: "https://prtimes.jp/main/html/rd/p/000000488.000024137.html",
          itemKeys: ["artmasters"]
        },
        {
          tag: "VR EXPERIENCE STORE",
          eyebrow: "02  /  VR EXPERIENCE STORE",
          title: "Permanent VR Venue",
          comingSoon: true,
          lede: "A permanent, urban VR venue running a variety of VR content — a new entertainment space where anyone can enjoy immersive experiences as part of daily life.",
          itemKeys: ["xrstore"]
        }
      ],
      items: [
        {
          key: "artmasters",
          image: RES("assets/work-artmasters.png"),
          gallery: [RES("assets/work-artmasters.png"), RES("assets/work-artmasters-2.jpg"), RES("assets/work-artmasters-3.jpg"), RES("assets/work-artmasters-1.png")],
          tag: "VR EXHIBITION",
          title: "Art Masters",
          jp: "Prado VR Art Exhibition",
          year: "2025—",
          venue: "Tokyo (Tokyo Tower)",
          tagline: "",
          intro: "From an era of looking at masterpieces, to an era of journeying inside them.",
          body: "'Art Masters: Prado VR Art Exhibition' finally arrives in Japan. A new kind of VR immersive experience that lets visitors step inside world masterpieces — Hieronymus Bosch's 'The Garden of Earthly Delights,' Diego Velázquez's 'Las Meninas,' and more.\n\nIt fundamentally redefines the traditional style of art appreciation, delivering sensations the original canvas could never reach through space, sound and bodily motion. The first run, held in Shanghai in 2025, recorded over 95% visitor satisfaction.",
          meta: [
            ["General Producer", "AquaVision"],
            ["Production Partner", "Acciona Living & Culture"],
            ["Licensor", "Museo del Prado"],
            ["Co-host", "TKP"],
            ["Cooperation", "Tokyo Tower"],
            ["Support", "Embassy of Spain · AECID · Cooperación Española"]
          ]
        },
        {
          key: "xrstore",
          tag: "VR EXPERIENCE STORE",
          title: "Permanent VR Venue",
          jp: "Story Dive Theatre WAHHHP",
          year: "2026—",
          venue: "Tokyo (Shinjuku)",
          tagline: "",
          intro: "A permanent, urban VR venue where a variety of VR experiences become part of daily life.",
          body: "A permanent VR experience venue from AquaVision. As a space where multiple VR contents can be experienced at any time, it aims to be a new entertainment hub where VR becomes part of everyday life.\n\nWe deliver a 'Story Dive Theatre'-style experience that lets you step into a different 'story world' for each work — action, fantasy, art and more. Fusing cutting-edge VR technology with spatial direction, it offers immersion that feels like stepping inside the story itself.\n\nWith continuous content updates, we are building a new VR entertainment space that balances repeat visits with ongoing buzz. The first location is planned for Shinjuku, Tokyo. Details will be announced via News.",
          meta: [
            ["Status", "Coming Soon"],
            ["Area", "Tokyo (Shinjuku)"]
          ]
        }
      ]
    },
    tech: {
      label: "05 / Technology",
      title: "Technology",
      lede: "XR · AI · interactive. We work both with what is shipping today and what nobody has shipped yet.",
      items: [
        { num: "T—01", en: "Volumetric Capture", jp: "Reality captured as volume", k: "Reality → Volume" },
        { num: "T—02", en: "Real-time XR Rendering", jp: "Unreal · Unity pipelines", k: "Unreal / Unity" },
        { num: "T—03", en: "Generative AI Pipeline", jp: "Diffusion · LLM workflows", k: "Diffusion · LLM" },
        { num: "T—04", en: "Spatial Audio Design", jp: "Ambisonic mixing", k: "Ambisonics" },
        { num: "T—05", en: "Multi-user Sync Networking", jp: "Edge realtime sync", k: "Edge Realtime" },
        { num: "T—06", en: "Modular Sustainable Build", jp: "Reusable low-energy modular install", k: "Recyclable / Low-energy" },
      ]
    },
    news: {
      label: "02 / News",
      title: "News",
      items: [
        { date: "2026.02.17", cat: "MEDIA", catCls: "media", title: "Featured on J:COM" },
        { date: "2026.02.06", cat: "PARTNER", catCls: "partner", title: "AquaVision and MRX Inc. announce a business partnership" },
        { date: "2025.12.23", cat: "EXHIBITION", catCls: "exhibition", title: "'Art Masters: Prado VR Exhibition' opens at Tokyo Tower" },
        { date: "2025.10.31", cat: "PARTNER", catCls: "partner", title: "TKP enters the VR business, investing in AquaVision as an affiliate" },
        { date: "2024.03.01", cat: "COMPANY", catCls: "company", title: "AquaVision Inc. founded" }
      ],
      more: "View all news"
    },
    partners: {
      label: "07 / Partners",
      title: "Partners",
      lede: "",
      items: [
        { name: "TKP", sub: "Capital · Business", logo: RES("assets/logo-tkp.png") }
      ]
    },
    team: {
      label: "06 / Team",
      title: "Team",
      lede: "Art, engineering, business — a multinational tight-knit team.",
      items: [
        { role: "Founder · CEO", en: "Stephanie Fu", jp: "付 斯瑶",
          bio: "Founder and Representative Director & CEO of AquaVision. After completing her master's degree at Keio University Graduate School of Commerce (2021), she began working between Shanghai and Tokyo. Finding a business opportunity at the intersection of technology, art and cultural heritage, she founded AquaVision.\n\nShe acquires the IP licenses of cultural heritage around the world and rebuilds them into new experiences with cutting-edge XR technology — with a mission to deliver 'portable cultural resources' that anyone can access on equal terms, regardless of place or circumstance.\n\nHer innovative approach has drawn attention at home and abroad, earning the Passion Award 'Creative Innovation Prize' in 2025. Through the fusion of culture and technology, she is pioneering the next generation of global cultural experiences.",
          tags: ["Strategy", "IP Licensing", "Global"] },
        { role: "Creative Director", en: "Aiko Sasaki", jp: "佐々木 愛子",
          bio: "Director and art director, with a career spanning theater direction, contemporary art and XR experience design. Leads creative across all AquaVision works, specializing in spatial design that operates on the body and emotion of the visitor.",
          tags: ["Direction", "Spatial", "Narrative"] },
        { role: "Marketing · Content Produce", en: "Kenji Nomura", jp: "野村 健児",
          bio: "Graduate of Rikkyo University. Worked as a communication planner at an advertising agency, handling concept development and integrated marketing communications (IMC) design.\n\nToday he provides end-to-end marketing support — from strategy to execution — primarily for ventures, with a strength in data-driven digital marketing strategy.\n\nHe joined AquaVision in January 2026 and works as a content producer in addition to marketing.",
          tags: ["Marketing", "Strategy", "Content"] }
      ]
    },
    ceo: {
      label: "MESSAGE",
      title: "Message from the CEO",
      body: "After the pandemic, the inequality of access to culture and art is more visible than ever. For the elderly, the disabled, those living far from major cities, and those facing economic constraints, encountering the world's masterworks is still a distant reality.\n\nWe respond to this by taking the intellectual property of world cultural heritage — Spain's Museo del Prado, Notre-Dame Cathedral and others — and rebuilding them as immersive VR experiences using cutting-edge XR technology, offered as a 'portable cultural resource' that everyone can access on equal terms.\n\nOur exhibition facilities use a reusable modular structure that minimizes environmental impact through short build-times, low energy use, and recyclable materials. No original artworks are shipped and no expensive insurance is required — a sustainable and economically reproducible cultural model.\n\nThe global XR market is projected to grow to roughly US$940B by 2030. We have established a unique position in this field with proven precedent, and will continue to drive sustainable, internationally meaningful projects that combine cultural access, regional economic vitality, educational support and environmental responsibility.",
      sign_role: "Founder & CEO",
      sign_name: "Stephanie Fu"
    },
    contact: {
      eyebrow: "Let's create something",
      line_en: <>Build the <em>next reality</em><br/>with us.</>,
      line_jp: "Let's build the next reality together.",
      cta1: "Contact us",
      cta2: "Join our team",
      meta: [
        ["Email", "info@aquavision.tech"],
        ["Address", "Tokyo, JP"]
      ]
    },
    footer: {
      tag: "",
      cols: [
        { h: "Menu", items: [["Vision", "#vision"], ["About", "#about"], ["Competence", "#services"], ["Business", "#business"], ["Works", "#works"], ["News", "news.html"], ["Team", "#team"], ["Partners", "#partners"], ["Recruit", "recruit.html"]] },
        { h: "Social", items: [["X", "https://x.com/AquaVisionVR"], ["Instagram", "https://www.instagram.com/artmasters.jp/"], ["LINE  (coming soon)", "#"]] }
      ],
      legal: "© 2026 AquaVision Inc.",
      privacy: "Privacy · Terms"
    }
  }
};

// ---------- Brand Mark (SVG) ----------
function BrandMark({ size = 32, theme = "dark" }){
  const stroke = theme === "dark" ? "#F2F6FA" : "#0F3461";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="bmclip">
          <circle cx="50" cy="50" r="42" />
        </clipPath>
      </defs>
      <g clipPath="url(#bmclip)">
        <path d="M -2 58 C 18 40, 34 42, 50 56 C 66 70, 82 72, 102 56 L 102 110 L -2 110 Z" fill="#D4A82A" />
        <path d="M -2 46 C 18 28, 34 30, 50 46 C 66 60, 82 62, 102 46 L 102 58 C 82 74, 66 72, 50 58 C 34 42, 18 40, -2 58 Z" fill="#2EB5E6" />
      </g>
      <circle cx="50" cy="50" r="42" stroke={stroke} strokeWidth="3" />
    </svg>
  );
}

window.COPY = COPY;
window.BrandMark = BrandMark;
