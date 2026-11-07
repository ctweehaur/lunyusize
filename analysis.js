// ==========================================================================
// 📖 《〈论语〉四则》深度文本赏析数据库 (analysis.js) - 马来西亚文言文黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<strong>（一）</strong>" + U_TAG("孔子") + "说：“学习了知识，然后按时去温习（实习）它，不也是很愉快吗？有志同道合的朋友从远方到来，不也是很快乐吗？别人不理解" + OMISSION_TAG("宾语", "我的思想才学") + "，我却不恼恨，不也是道德上有修养的君子吗？”<br>" +
        "<strong>（二）</strong>" + U_TAG("孔子") + "说：“温习学过的旧知识，进而从中领悟出新的体会，就可以凭借" + OMISSION_TAG("介词宾语", "这一点") + "成为老师了。”<br>" +
        "<strong>（三）</strong>" + U_TAG("孔子") + "说：“不出声地把所学的知识记在心里，学习不知满足，教导别人不知疲倦，对我来说，哪一点做到了呢！”<br>" +
        "<strong>（四）</strong>" + U_TAG("孔子") + "说：“几个人走在一起，其中必定有可以做我老师的人。选择他们的优点来学习，" + OMISSION_TAG("谓语", "看出") + "他们的缺点就对照自己加以改正。”" +
        "</span><br><br>" +
        "<strong>【古代文化常识与出处提示（课本第74页）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《论语》是记录" + U_TAG("春秋") + "末期大思想家、教育家" + U_TAG("孔子") + "（名" + U_TAG("丘") + "，字" + U_TAG("仲尼") + "，" + U_TAG("鲁国") + "人）及其弟子言行的汇集本，共二十篇，首创<strong>“语录体”</strong>。本文四则选句分别摘自《学而》《为政》《述而》，集中阐述了儒家关于<strong>学习方法（时习、温故知新、默识）、学习态度（学而不厌、三人行必有我师）与君子修养（人不知而不愠、诲人不倦）</strong>的核心智慧。</span>",

    paragraphs: {
        1: "<strong>【第一则（《学而》）：学习之乐与君子之风】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[子]曰：“学[而][时习]之，[不亦][说]乎？有[朋]自远方来，不亦乐乎？人不知" + CARET + "[而]不[愠]，不亦[君子]乎？”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[孔子]✓说：“学习了知识[然后]✓[按时温习]✓它，[不也是]✓很[愉快]✓吗？有[志同道合的朋友]✓从远方来，不也是很快乐吗？别人不理解" + OMISSION_TAG("宾语", "自己") + "[却]✓不[恼恨]✓，不也是[道德上有修养的人]✓吗？”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("说(yuè)", "通“悦”，愉快、高兴", "说话、解说（读 shuō）") +
                       ANCIENT_MODERN_TAG("君子", "道德上有修养的人", "泛指人格高尚的人") +
                       GRAMMAR_TAG("固定句式", "不亦……乎＝不也是……吗？（委婉反问）") +
                       GRAMMAR_TAG("修辞手法", "排比＋反问（连用三句“不亦……乎”）") +
                   "</div>" +
               "</div>" +
           "</div>",

        2: "<strong>【第二则（《为政》）：温故知新的治学之道】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "子曰：“[温][故][而][知][新]，[可以]" + CARET + "[为]师[矣]。”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "孔子说：“[温习]✓[学过的旧知识]✓，[进而]✓[领悟/获得]✓[新的体会]✓，[可以凭借]✓" + OMISSION_TAG("介词宾语", "这一点") + "[成为]✓老师[了]✓。”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("可以", "可以凭借（“可”＋介词“以”）", "表示许可或可能") +
                       ANCIENT_MODERN_TAG("故", "学过的旧知识（形容词作名词）", "事故、原因、所以") +
                       GRAMMAR_TAG("派生固定成语", "温故知新") +
                   "</div>" +
               "</div>" +
           "</div>",

        3: "<strong>【第三则（《述而》）：学而不厌、诲人不倦的谦逊自省】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "子曰：“[默]而[识][之]，学而不[厌]，[诲]人不[倦]，[何有于我哉]！”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "孔子说：“[不出声地]✓把[所学的知识]✓[记在心里]✓，学习而不知[满足]✓，[教导]✓别人不知[疲倦]✓，[对我来说，哪一点做到了呢]✓！”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("识(zhì)", "通“志”，记住（读 zhì）", "认识、知识（读 shí）") +
                       ANCIENT_MODERN_TAG("厌", "通“餍”，满足", "讨厌、厌倦") +
                       GRAMMAR_TAG("倒装句", "何有于我哉＝于我有何哉（宾语前置＋状语后置）") +
                       GRAMMAR_TAG("派生固定成语", "学而不厌、诲人不倦") +
                   "</div>" +
               "</div>" +
           "</div>",

        4: "<strong>【第四则（《述而》）：三人行必有我师的虚心胸怀】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "子曰：“[三人][行]，[必]有我师[焉]。[择][其][善者]而[从]之，" + CARET + "其[不善者]而[改]之。”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "孔子说：“[几个人]✓[走在一起]✓，其中[必定]✓有可以做我老师的[人（在里面）]✓。[选择]✓[他们的]✓[优点]✓来[学习]✓，" + OMISSION_TAG("谓语", "看出/对照") + "他们的[缺点]✓就（反省自己）[改正]✓它。”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("三", "虚指多数（几个、多人）", "确切数目 3") +
                       ANCIENT_MODERN_TAG("从", "跟从、向……学习（动词）", "自、由（介词）") +
                       GRAMMAR_TAG("派生固定成语", "择善而从") +
                   "</div>" +
               "</div>" +
           "</div>"
    }
};
