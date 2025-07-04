"use client";
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export default function VestaLandingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");
  const [menuOpen, setMenuOpen] = useState(false);

  // GoogleフォームのformResponseエンドポイント（実際のIDに置き換えてください）
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdvSWetChs9cUQKsut3eFxZonm8_YVAs3msSpjwpItVLOdmtQ/formResponse";

  // 各項目のentry ID
  // 378164639: お名前
  // 559655339: 店舗名・クリニック名
  // 516974113: 電話番号
  // 698898853: メールアドレス
  // 802279590: ご質問・ご相談内容

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);

    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setSubmitStatus("success");
    e.currentTarget.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/vesta-logo.png"
                alt="VESTA(ベスタ) Logo"
                width={400}
                height={160}
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-red-800 font-semibold text-lg transition-colors">
                VESTA(ベスタ)とは
              </a>
              <a href="#therapy" className="text-gray-700 hover:text-red-800 font-semibold text-lg transition-colors">
                M&R Therapy
              </a>
              <a href="#modes" className="text-gray-700 hover:text-red-800 font-semibold text-lg transition-colors">
                モード・プローブ
              </a>
              <a href="#applications" className="text-gray-700 hover:text-red-800 font-semibold text-lg transition-colors">
                適用分野
              </a>
              <a href="#specs" className="text-gray-700 hover:text-red-800 font-semibold text-lg transition-colors">
                仕様
              </a>
              <a href="#faq" className="text-gray-700 hover:text-red-800 font-semibold text-lg transition-colors">
                FAQ
              </a>
              <a
                href="#contact"
                className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-md font-semibold text-lg transition-colors"
              >
                お問い合わせ
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-800 hover:bg-gray-100"
              onClick={handleMenuToggle}
              aria-label="メニューを開く"
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* モバイル用メニュー */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-lg border-t border-gray-200 px-4 py-6 space-y-4 text-center animate-fade-in z-50">
            <a href="#about" className="block text-gray-700 hover:text-red-800 font-semibold text-lg py-2" onClick={handleMenuClose}>VESTA(ベスタ)とは</a>
            <a href="#therapy" className="block text-gray-700 hover:text-red-800 font-semibold text-lg py-2" onClick={handleMenuClose}>M&R Therapy</a>
            <a href="#modes" className="block text-gray-700 hover:text-red-800 font-semibold text-lg py-2" onClick={handleMenuClose}>モード・プローブ</a>
            <a href="#applications" className="block text-gray-700 hover:text-red-800 font-semibold text-lg py-2" onClick={handleMenuClose}>適用分野</a>
            <a href="#specs" className="block text-gray-700 hover:text-red-800 font-semibold text-lg py-2" onClick={handleMenuClose}>仕様</a>
            <a href="#faq" className="block text-gray-700 hover:text-red-800 font-semibold text-lg py-2" onClick={handleMenuClose}>FAQ</a>
            <a href="#contact" className="block bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-md font-semibold text-lg transition-colors" onClick={handleMenuClose}>お問い合わせ</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-gray-900 py-12 px-4 min-h-[800px]" style={{ backgroundImage: 'url(/images/VESTA_RF_TOP.JPG)' }}>
        <div className="max-w-6xl mx-auto text-center mt-40">
          <div className="mb-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-0 shadow-2xl inline-block">
              <Image
                src="/images/vesta-logo.png"
                alt="VESTA(ベスタ) M&R Therapy"
                width={600}
                height={80}
                className="mx-auto drop-shadow-lg"
                priority
              />
            </div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 shadow-2xl inline-block mx-auto max-w-2xl">
            <p className="text-xl md:text-2xl mb-8 text-white font-medium drop-shadow-lg">ラジオ波深部熱筋膜リリース施術</p>
            <div className="bg-red-800/90 backdrop-blur-sm rounded-full px-8 py-4 inline-block shadow-lg">
              <p className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">「筋膜リリースに熱が加わる」</p>
            </div>
          </div>
        </div>
        {/* 装飾的な要素を追加 */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-300/20 rounded-full blur-2xl"></div>
      </section>

      {/* What is VESTA Section */}
      <section id="about" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-6">VESTA(ベスタ)とは？</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                <strong className="text-red-800">温熱筋膜リリース</strong>に特化した機器です。
              </p>
              <p className="text-lg text-gray-700 mb-4">
                MFRテクニックとRET RF深部加温を同時に適用する<strong className="text-red-800">M&R Therapy</strong>と、
              </p>
              <p className="text-lg text-gray-700">
                マジックグローブを装着した<strong className="text-red-800">LF電気施術</strong>を可能とします。
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/VESTA03.png"
              alt="VESTA(ベスタ)機器"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* M&R Therapy Section */}
      <section id="therapy" className="py-16 px-4 bg-red-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-900 text-center mb-12">M&R Therapy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4">体のバランスを回復させるMFR</h3>
                <p className="text-sm text-gray-600 mb-4">＊Myofascial Release(筋膜リリース)</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    効果的な筋膜リリース
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    痛みの軽減
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    可動域の改善
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4">高出力ノースパークのRET RF</h3>
                <p className="text-sm text-gray-600 mb-4">＊Resistive Electric Transfer Diathermy</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    自然治癒過程の促進
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    組織の細胞の活性化
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    健康的な筋膜の回復
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Combined Effects Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-900 text-center mb-12">
            MFRとRETを合わせ、短時間でより強力な癒し効果
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6">MFRとRETが出合うと？</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>MFRツールのみを過度に使用したときに現れる痛みや赤みを大幅に減少</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>筋膜リリース（MFR）後の老廃物や毒素排出の促進</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6">RETとMFRが出合うと？</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>深部筋膜まで熱と共に物理的刺激の伝達</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>MFRの積極的な施術で痛みの原因をすばやく除去</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>短時間での筋膜癒着の解消</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LF Electrical Therapy Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-900 mb-6">LF電気施術(LF Electorical Therapy)</h2>
          <p className="text-xl text-gray-700">
            マジックグローブで筋収縮を誘発させ、セラピストのエネルギー消費を最小化
          </p>
        </div>
      </section>

      {/* Optimized Modes Section */}
      <section id="modes" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-900 text-center mb-6">最適化されたモードとかっさプローブ</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 mb-4">VESTA(ベスタ)一つで、</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-red-600 text-white px-4 py-2 text-lg">より短時間で！</Badge>
              <Badge className="bg-red-600 text-white px-4 py-2 text-lg">より快適に！</Badge>
              <Badge className="bg-red-600 text-white px-4 py-2 text-lg">より効果的に！</Badge>
            </div>
            <p className="text-xl text-gray-700">かっさ施術が可能です。</p>
          </div>

          <div className="space-y-12">
            <Card className="border-red-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-red-800 mb-4">RET RF -モノポーラ</h3>
                <p className="text-gray-600 mb-6">(MFR電極と円形電極)</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Image
                    src="/images/VESTA_RF_MFR_D1.JPG"
                    alt="RET RF 1"
                    width={350}
                    height={250}
                    className="rounded-lg w-full h-auto"
                  />
                  <Image
                    src="/images/VESTA_RF_MFR_D2.JPG"
                    alt="RET RF 2"
                    width={350}
                    height={250}
                    className="rounded-lg w-full h-auto"
                  />
                  <Image
                    src="/images/VESTA_RF_MFR_D3.JPG"
                    alt="RET RF 3"
                    width={350}
                    height={250}
                    className="rounded-lg w-full h-auto"
                  />
                  <Image
                    src="/images/VESTA_RF_MFR_D4.JPG"
                    alt="RET RF 4"
                    width={350}
                    height={250}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-red-800 mb-4">RET RF -バイポーラ、マルチポーラ</h3>
                <div className="flex justify-center mt-6">
                  <Image
                    src="/images/VESTA_RF_MP.JPG"
                    alt="バイポーラ・マルチポーラ"
                    width={350}
                    height={250}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-red-800 mb-4">LF電気施術</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Image
                    src="/images/VESTA_LF_Gloves_1.JPG"
                    alt="LF電気施術1"
                    width={350}
                    height={250}
                    className="rounded-lg w-full h-auto"
                  />
                  <Image
                    src="/images/VESTA_LF_Gloves_2.JPG"
                    alt="LF電気施術2"
                    width={350}
                    height={250}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Areas Section */}
      <section id="applications" className="py-16 px-4 bg-red-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-900 text-center mb-12">適用分野</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="border-red-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center flex items-center justify-center min-h-[120px]">
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">筋・筋膜症の発痛点</h3>
                  <p className="text-sm text-gray-600">Trigger Points（TrPs）</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center flex items-center justify-center min-h-[120px]">
                <h3 className="text-lg font-bold text-red-800">神経機能の障害</h3>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center flex items-center justify-center min-h-[120px]">
                <h3 className="text-lg font-bold text-red-800">線維筋肉痛</h3>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center flex items-center justify-center min-h-[120px]">
                <h3 className="text-lg font-bold text-red-800">（スポーツ）リハビリ治療および管理の補助</h3>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center flex items-center justify-center min-h-[120px]">
                <h3 className="text-lg font-bold text-red-800">筋肉と関節の炎症</h3>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center flex items-center justify-center min-h-[120px]">
                <h3 className="text-lg font-bold text-red-800">運動機能の低下</h3>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center flex items-center justify-center min-h-[120px]">
                <h3 className="text-lg font-bold text-red-800">筋骨格系疾患</h3>
              </CardContent>
            </Card>

            <Card className="border-red-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center flex items-center justify-center min-h-[120px]">
                <h3 className="text-lg font-bold text-red-800">ストレス及び鎮痛</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-red-900 text-center mb-12">仕様</h2>
          <Card className="border-red-200 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">商品名</h3>
                  <p className="text-gray-700 mb-6">VESTA</p>

                  <h3 className="text-xl font-bold text-red-800 mb-2">品目名</h3>
                  <p className="text-gray-700 mb-6">高周波温熱機器</p>

                  <h3 className="text-xl font-bold text-red-800 mb-2">定格電圧</h3>
                  <p className="text-gray-700 mb-2">AC100-120V,50/60Hz</p>
                  <p className="text-gray-700 mb-6">AC200-240V,50/60Hz</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">最大消費電力</h3>
                  <p className="text-gray-700 mb-6">220VA/260VA</p>

                  <h3 className="text-xl font-bold text-red-800 mb-2">動作モード</h3>
                  <p className="text-gray-700 mb-2">RF(MONO/Bl/PULSE)</p>
                  <p className="text-gray-700 mb-6">LF (LF1-LF7)</p>

                  <h3 className="text-xl font-bold text-red-800 mb-2">サイズ/重量</h3>
                  <p className="text-gray-700">408×365×164mm/5.06kg (本体のみ)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-red-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-red-900 text-center mb-12">よくある質問</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="demo" className="bg-white rounded-lg shadow-lg mb-4">
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-bold text-red-800 hover:text-red-900">
                デモンストレーションは可能ですか？
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-700">はい、可能です。お問い合わせフォームよりデモンストレーション希望をご選択いただき、ご希望の日時などをご記入ください。</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="flow" className="bg-white rounded-lg shadow-lg mb-4">
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-bold text-red-800 hover:text-red-900">
                導入までの流れを教えてください
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-700">お問い合わせ → デモンストレーション → お見積り → ご契約 → 納品・設置 という流れとなります。詳細はお問い合わせください。</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="maintenance" className="bg-white rounded-lg shadow-lg mb-4">
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-bold text-red-800 hover:text-red-900">
                メンテナンスサービスはありますか？
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-700">はい、定期的なメンテナンスサービスをご用意しております。機器の状態確認や調整を行い、常に最適な状態でご使用いただけます。</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="training" className="bg-white rounded-lg shadow-lg mb-4">
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-bold text-red-800 hover:text-red-900">
                トレーニングは提供されますか？
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-700">はい、導入時に基本的な操作方法や施術テクニックのトレーニングを実施いたします。また、必要に応じてフォローアップ研修も承ります。</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty" className="bg-white rounded-lg shadow-lg mb-4">
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-bold text-red-800 hover:text-red-900">
                保証期間はどのくらいですか？
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-700">製品保証期間は1年間となります。保証期間終了後も、メンテナンスサービスを通じて製品のサポートを継続してご提供いたします。</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-4 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-red-900 text-center mb-12">お問い合わせ</h2>
          <Card className="border-red-200 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    お問い合わせ種別 <span className="text-red-600">*</span>
                  </label>
                  <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="entry.1191488629"
                        value="デモンストレーション希望"
                        required
                        className="text-red-600 focus:ring-red-500"
                      />
                      <span className="text-gray-700">デモンストレーション希望</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="entry.1191488629"
                        value="資料請求"
                        required
                        className="text-red-600 focus:ring-red-500"
                      />
                      <span className="text-gray-700">資料請求</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="entry.1191488629"
                        value="その他"
                        required
                        className="text-red-600 focus:ring-red-500"
                      />
                      <span className="text-gray-700">その他</span>
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="entry.378164639"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="facility" className="block text-sm font-medium text-gray-700 mb-2">
                      店舗名・施設名
                    </label>
                    <input
                      type="text"
                      id="facility"
                      name="entry.559655339"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    住所
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="entry.1237897422"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="〒000-0000 都道府県市区町村番地"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="entry.516974113"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="entry.698898853"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ご質問・ご相談内容
                  </label>
                  <textarea
                    id="message"
                    name="entry.802279590"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="ご質問やご相談がございましたら、お気軽にお書きください。"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-red-800 hover:bg-red-900 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg disabled:transform-none"
                  >
                    {isSubmitting ? "送信完了" : "お問い合わせを送信"}
                  </button>
                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                      お問い合わせを送信しました。ありがとうございます。
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">株式会社Lamech</h3>
          <p className="text-red-200">〒634-0803 奈良県橿原市上品寺町81-16-201</p>
        </div>
      </footer>
    </div>
  )
}
