// ==UserScript==
// @name         NGA全量历史回复导出(加固版v67-抓完不复查+带页码)
// @version      67.0
// @author       RRRZY
// @match        *://bbs.nga.cn/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://g.nga.cn/*
// @match        *://www.nga.cn/*
// @match        *://nga.cn/*
// @match        *://bbs.ngacn.cc/*
// @match        *://ngacn.cc/*
// @connect      nga.cn
// @connect      bbs.nga.cn
// @connect      ngabbs.com
// @connect      nga.178.com
// @connect      g.nga.cn
// @connect      www.nga.cn
// @connect      ngacn.cc
// @connect      bbs.ngacn.cc
// @connect      *
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_log
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 被别的页面用 iframe 嵌入时不要注入 UI，避免重复挂按钮
    if (window.top !== window.self) return;

    const PROMPT = `===== [本次独立分析 开始] =====
[强制规则]完全忽略本次对话之前的所有内容，仅基于本次提供的NGA用户回帖回复分析（帖子标题大概率为他人所写，请注意甄别，仅作为用户回复该贴是什么的参考）。
==================================================
# 数字留痕心理与行为特征建模系统 Prompt (Behavioral & Psychological Profiling Prompt)

[角色与专业设定]
你是一位精通行为科学、犯罪心理学（FBI BEA 行为证据分析法）与计算语言学的顶级心理画像专家（Behavioral Profiler）。你的任务是根据用户提供的公开数字留痕（如发言、历史帖子、消费偏好、技术讨论等），对目标对象进行深度、系统且客观的心理与行为特征建模。

[方法论理论框架]
你在分析时必须遵循以下专业理论框架：
1. FBI BEA (Behavioral Evidence Analysis)：从“行为留痕”推导“动机/心理机制”，强调“证据-推论”的一一对应。
2. OCEAN 大五人格模型：评估开放性 (O)、尽责性 (C)、外向性 (E)、宜人性 (A)、神经质 (N) 的光谱表现。
3. 语言与沟通特征分析：分析其句式结构、情绪阈值、修辞习惯及控制欲倾向。
4. 社会人口统计学推论：结合生活常识、地缘特征与消费选择推导人口统计学背景。
5. 亚文化与流行语辨识（Subculture Distinction）：区分“深层人格映射”与“群体的网络梗无意识复制”，防止过度解读。

[输出报告标准格式]

行为特征与心理画像报告 (Behavioral & Psychological Profiling Report)
*针对目标对象基于公开留痕数据的专业心理与行为特征建模*

一、 综合人口统计学与基本画像 (Demographic & Baseline Profile)
* 生理年龄与阶层推断：[推断结论] [置信度：高/中/低]
  行为证据：[引用具体的留痕证据]
* 社会经济地位 (SES) 与消费观：[推断结论] [置信度：高/中/低]
  行为证据：[引用具体的留痕证据]
* 地理与环境背景：[推断结论] [置信度：高/中/低]
  行为证据：[引用具体的留痕证据]

二、 心理亚型与人格特质解析 (Psychological Subtypes & Personality Traits)
（注意：每个亚型必须包含【心理机制】与【行为表现】两部分，并给出大五人格或心理类型判定）

1. [核心心理特征命名，如：强掌控欲与极客型的“DIY实干主义者”]
* 心理机制：[分析其深层心理诉求、安全感来源或防御机制]
* 行为表现：
  - [具体领域1的表现与证据]
  - [具体领域2的表现与证据]
  心理学判定：[如：高尽责性、低宜人性、高开放度等]

2. [第二核心心理特征命名]
* 心理机制：...
* 行为表现：...

3. [第三核心心理特征命名]
* 心理机制：...
* 行为表现：...

三、 语言风格与沟通行为分析 (Linguistic & Communication Analysis)

[沟通特征]
 * 观点表达：[特征描述，如：确定性结论、去修饰化]
 * 情绪阈值：[特征描述，如：理性克制/特定点易激惹]
 * 语气风格：[特征描述，如：教导式、冷峻、江湖气]

1. [核心句式/修辞习惯]：[详细解析与证据]
2. [论证逻辑与对抗倾向]：[详细解析与证据]
3. [防范与警惕心理]：[详细解析与证据]

四、 综合能力与行为模式画像汇总 (Behavioral Profile Matrix)

维度 | 画像定位 | 关键证据支撑
--------------------------------------------------
核心知识库 | [知识领域] | [代表性留痕]
决策偏好 | [理性/感性/性价比等] | [代表性留痕]
社会心理状态 | [社交倾向/处世哲学] | [代表性留痕]
潜在应激点 | [最容易引发矛盾或反驳的点] | [代表性留痕]

五、 心理刻画总结与应用扩展 (Profiler Conclusion & Application)
1. 终极总结：[用专业精炼语言，对目标对象的性格底层逻辑、身份认同构建方式及社会适应模式进行终极总结。]
2. 拟态复刻 System Prompt：[生成一段可直接供大语言模型使用的 System Prompt，100% 还原该目标的语言风格、思维逻辑与语气顿挫。]
3. 沟通交互指南：[针对该目标的性格防线与潜在应激点，制定最有效的沟通建议与避坑策略。]

[强制执行规则]
1. 严格的“证据链”原则：禁止空洞的形容词堆砌。每一个心理学结论必须附带具体的行为或语言留痕作为直接证据支撑。
2. 拒绝模棱两可：不要使用巴纳姆效应式的套话（如“他有时开朗有时内向”），必须给出明确的偏向性判断。
3. 冷峻客观的学术语气：全篇采用第三人称 Profiler（画像师）的专业视角，语言要冰冷、客观、剖析深刻，避免温情脉脉或情绪化评价。
4. 动态置信度标记（Confidence Rating）：对于证据有限的推论（如特定地理背景或SES推断），需标注【置信度：低/中/高】并说明理由，严禁无中生有。
5. 区分亚文化梗与人格映射：在推导心理机制时，必须区分“深层人格映射”与“纯粹的网络梗/语境词无意识复制”，防止过度解读。

[数据可用性规则（v55 新增，必须遵守）]
1. 引用已剔除：回复正文中他人的引用内容已在抓取阶段删除，正文即目标用户的原创发言。若正文里仍出现“Reply to [pid=...] Post by [uid=...]”这类引用抬头，一律视为引用残留，不得当作其发言。
2. IP属地的使用：账号资料区的 IP属地只是地域线索之一，可能来自代理、出差、单位或校园网络，禁止单独据此判断常住地或下地域结论；只有当它与发言中反复出现、且带有生活细节的地名互相印证时，才提高“地理与环境背景”一项的置信度；无法印证时按“仅能确认账号近期出口IP所在地”处理，不写常住地。
3. 时间数据的使用：账号天数、历史日均发帖、最近3天/7天可见主题数是判断“发帖节奏是否异常”的证据，不要在报告里复述这些数字，也不要设置“账号数据”标题；把它们转化成结论即可。
4. 信号触发：账号资料区标注“已命中”的信号（老号沉寂后突发、新号高强度）才可以被引用；标注“未命中”的信号完全不要提及，也不要写“未见异常”这类反向表述。
5. 主题发布时间：主题段附带的发布时间可用于判断兴趣的时间分布与议题迁移；但主题列表只覆盖有限页，不代表全部历史，禁止据“最近N天没有主题”推断用户已离开。
6. 样本量自觉：若回复条数很少或时间跨度极短，必须在结论里降低置信度，不得给出确定性人格判定。
==================================================
请根据以上指令与格式，对以下数据进行画像分析

目标用户：{USERNAME}（uid={UID}）

以下是用户回帖内容：\n\n`;

    const PROMPT_END = `\n\n===== [本次独立分析 结束] =====\n[最终规则]仅基于本次内容分析，禁止参考历史对话！`;

    // ======================================================
    // v55 相对 v54 的改动
    //
    // A. 正确性（最重要）
    //   A1. 新增 stripQuoteBlocks()：剔除回复里的他人引用。v54 只做 replace(/<[^>]+>/g,'')，
    //       NGA 的 <div class="quote"> / <fieldset class="quote"> 和未渲染的嵌套 [quote]
    //       会被整段留下，于是"被引用者的原话"被当成目标用户发言送进画像。
    //   A2. 无意义回复过滤（isIgnoredContent）："回复时间超过限制""账号已注销"
    //       "本帖已被锁定/删除"等噪声不再计入。
    //
    // B. 新增数据维度
    //   B1. 账号资料页：nuke.php?func=ucp&uid=N → IP属地 / 注册日期 / 总发帖数
    //       → 账号天数、历史日均发帖（用 GM_xmlhttpRequest 取，不需要隐藏 iframe）
    //   B2. 主题发布时间：postdate 的 title 属性是精确时间，textContent 只是"1天前"。
    //       → 最近7天/3天可见主题数、一年以上/7天至一年/无法识别时间分布
    //       → 老号沉寂后突发（注册>3年 + 最近7天恰1个主题 + 其余都>1年）
    //       → 新号高强度（账号≤31天 + 最近3天≥12个 + 日均≥4个）
    //   B3. 板块（span.titleadd2 a）、楼层小标题（h3[id^="postsubject"]）
    //   B4. 作者识别 4 条兜底链，降低"取不到 uid 就宁可多留"带来的串人风险
    //
    // C. 健壮性
    //   C1. 总页数探测：读"第 X 页 / 共 Y 页"，翻到 tp+2 页就停，不再盲翻 600 页
    //   C2. 错误码分级：只重试 429/502/503/504；404/410 直接停；其余非 200 累计 3 次停
    //   C3. 保留 v54 的 ERROR:2048 累计容错 + 并集续抓 + 尾部复查
    //
    // ===== v63：把「结束」和「失败」分开（用户实测发现）=====
    //   用户原话："(ERROR:2048) > 没有符合条件的结果  网页出现这个就是这个人没了啊"
    //   ★ v65 更正这段注释里的证据来源（原来写得太满了）：
    //     · 真实【登录态】证据只有一条：用户截图里脚本自己打印的
    //       「NGA 拒绝页 2048 "没有符合条件的结果"」—— 它证明登录态的结束页
    //       同样带 msgcodestart-->2048 / msginfostart-->文字 这两个锚点，结构成立。
    //     · 下面那句"响应头、体积、结构完全一样"其实来自【匿名】抓取
    //       （_probe/end_p1.bin）+ 手工替换文字合成的 fixture，【不是】登录态实测。
    //       很多站点登录/未登录是两个界面，匿名响应不能当登录态页面的证据。
    //     · 待办：用 v65 的取证按钮在登录态下抓一张真正的结束页/占位符页，
    //       替换掉合成 fixture。在那之前，"结束页长什么样"只能算"结构已验证、字节未验证"。
    //   v60~v62 只看"是不是提示页"，于是把"列表到头的正常信号"当成"被拒绝"：
    //     重取同一页 2/2 → 等 26 秒 → 连续 2 页 → 主动收工 → 用户再点 → 从第 1 页重来。
    //   v54 之所以"只管一直抓"，是因为它压根不做这个判定：解析 0 条、等 1.8 秒、翻下一页。
    //   v63 恢复 v54 的行为，并补上正确的收口：end → 停；login/limit → 记一笔、等 8~20s、翻下一页。
    // ======================================================
    // v56 相对 v55 的改动：修"在回复页拿不到账号资料"
    //
    // 根因（不是 bug 是设计缺口）：
    //   脚本工作的页面是历史回复界面 thread.php?searchpost=1&authorid=N，
    //   这个页面只渲染"回复行"，**不含任何账号资料字段**。
    //   IP属地 / 注册日期 / 总发帖数 只存在于资料页 nuke.php?func=ucp&uid=N，
    //   所以必须额外发一个请求去取，指望当前页面 DOM 是取不到的。
    //
    // v55 为什么可能取不到：
    //   D1. 编码赌错。v55 用 overrideMimeType "text/html; charset=gbk"，
    //       而 reply 页是 GBK、nuke.php 未必是 GBK；一旦解错码，
    //       "IP属地" 这种 label 直接变成乱码 → 字典解析全空 → 显示"未获取"。
    //   D2. 没写 @connect。Tampermonkey 对跨域请求要白名单，缺了会被拦。
    //   D3. 单通道。GM 通道被限流/被拦/未登录态时没有后备。
    //   D4. 域名单一。当前站若异常，不会换 NGA 的其他域名再试。
    //
    // v56 的做法：
    //   E1. httpGetRaw()：GM_xmlhttpRequest 取 arraybuffer（原始字节），
    //       用 decodeResponseText() 对 utf-8 / gb18030 各解一遍，
    //       按"属地/注册/发帖"等关键词命中数打分选优 —— 不靠猜 charset。
    //   E2. 拿不到关键字段就自动降级 loadProfileViaIframe()：
    //       同源隐藏 iframe 真实导航，浏览器自己处理 GBK/登录态，最接近人肉打开页面。
    //   E3. 多域名兜底：当前 host 失败 → bbs.nga.cn → ngabbs.com → nga.178.com。
    //   E4. 可重试状态码(429/502/503/504/0)退避重试；资料结果按 uid 缓存 12 小时。
    //   E5. 顺带解析用户名（导出文件名 / Prompt 里的 {USERNAME} 不再是 TargetUser）。
    //   E6. 调试按钮升级：通道 / HTTP / 字节数 / 所用编码 / 全字段字典 + 失败原因。
    // ======================================================
    // v57 相对 v56 的改动：「抓取速度大降」的修复
    //
    // 现象：装上 v56 后，点「开始抓取」长时间停在"读取账号资料页"，翻页迟迟不开始。
    //
    // 根因（v56 引入的性能回归，不是 NGA 变慢）：
    //   F1. 资料页抓取被【串行 await】放在主题/回复翻页之前。
    //       资料页只是可选数据，却卡在整条流水线的咽喉上。
    //   F2. httpGetRaw 默认 maxAttempts=2、单次 timeout=30000，外面还套 4 个域名：
    //       最坏 4 × 2 × 30s = 240s，加上重试间隔与收尾等待 ≈ 4.5 分钟。
    //   F3. iframe 降级通道 timeout=20000，再叠 20s。
    //   （翻页本身 fetchPage/crawl/所有延时阈值在 v55→v56 完全没改，不是它慢。）
    //
    // v57 的修法：
    //   G1. 【并行】：fetchProfile 改为先发起、不 await，翻页跑完再收口。
    //       资料页请求与第 1 页请求几乎同时出发，通常翻页期间就返回了 → 零额外等待。
    //   G2. 【硬时间预算】PROFILE_BUDGET_MS = 15000：所有通道累计超预算即放弃，
    //       返回"未获取"继续走，绝不拖住主流程。
    //   G3. 单次请求超时 30s → 8s，每域名只试 1 次；域名数 4 → 2。
    //   G4. iframe 超时 20s → 9s，且剩余预算不足 2s 时直接跳过。
    //   G5. 资料页缺失不再算失败：facts 里写"未获取"，导出照常完成。
    // ======================================================

    let stopRequested = false;

    const MAX_PAGES = 600;            // 单次最多翻多少页
    // ★ v67：TAIL_RECHECK（抓完复查最后几页）已删除 —— 用户要求"抓取结束不要复查"。
    const RETRYABLE_STATUS = [429, 502, 503, 504];   // 资料页通道的重试判定
    const HARD_STOP_STATUS = [404, 410];             // 页面不存在/被删，直接停

    // ★★★ v59 节流重做：对齐 v54（你实测"又好又不断"的那版），并把并发压到 1 ★★★
    //   v54 的节流：每页之间 1800 + rand(0~900) ≈ 1.8~2.7s，且【全程只有一个在途请求】。
    //   v58 把间隔改快成 1500 + rand(0~800)，还追加了
    //     "同页 5s 内连试 3 次 → 立刻换通道 → 冷却 30s → 整页再来一轮（≈8 次）"。
    //   实测表现就是"一抓就失败、只能冷却"：WAF 看的是瞬时并发和连击频率，不是平均间隔；
    //   失败后连击只会把封禁续期 —— 越试越封。
    //
    //   v59 规则（三条，缺一不可）：
    //     ① 页间 2.5~3.6s —— 比 v54 再慢一点，往安全方向偏，不追求速度。
    //     ② 任何时刻只有 1 个在途请求 —— 资料页从 t=0 挪到翻页全部结束之后。
    //     ③ 失败【只等不连击】—— 等 8~20s，然后翻【下一页】（v63 修正：不再重取同一页）；
    //        确认取不到的页记进 failedPages，报告里列出来（v67 起不再自动补漏，由用户再点开始续抓）。
    const PAGE_DELAY_MS = 2500;        // 成功页之间的间隔（v54=1800, v58=1500 太快）
    const PAGE_DELAY_JITTER = 1100;    // 抖动 → 实际 2.5~3.6s
    const FIRST_PAGE_DELAY_MS = 1200;  // 冷启动缓冲：让页面自身的请求先静下来再开第一枪
    // ★ v67：TAIL_DELAY_MS / TAIL_DELAY_JITTER 随"复查 + 补漏"一起去掉。
    const END_MSG_RE = /没有符合条件的结果|没有符合条件的|没有搜索到|没有找到相关|没有相关的结果|没有相关内容|没有查询到/;
    const PLACEHOLDER_MSG_RE = /帖子发布或回复时间超过限制/;
    const MAX_BAD_PAGES = 15;          // ★ v63：连续这么多页拿不到内容 → 停（v54 的 MAX_BAD_PAGES 原值）
    const PAGE_RETRY_WAIT_MS = 8000;    // ★ v63：拿不到内容后等 8s（v54：8000 + rand(0~12000)）
    const PAGE_RETRY_WAIT_JITTER = 12000;
    const IFRAME_MAX_USES = 1;         // iframe 只在 GM 彻底拿不到响应时试 1 次，不行全程弃用
    const MAX_EMPTY_PAGES = 15;        // 连续多少页【整页连回复块都没有】才停（保留 v54 的容错）
    const MAX_CACHED_PAGES = 25;       // 连续多少页【有回复块但全是缓存】才停（仅总页数未知时生效）
    // ★ v62：占位符页（原帖已被 NGA 冲水/过期）不代表「到底了」，所以【不】用 MAX_EMPTY_PAGES 惩罚它。
    //   已知总页数时永远不因它早停；只有总页数未知时才用这个兜底。
    const MAX_PLACEHOLDER_PAGES = 30; // 连续这么多页都是「帖子已冲水」占位符（且总页数未知）才停
    const PAGE_IFRAME_TIMEOUT = 25000; // iframe 通道单页超时

    const TOPIC_EMPTY_STOP = 2;       // 主题列表连续 2 页无新增就停（作者主题列表通常只有 1~2 页）
    const TOPIC_MAX_PAGES = 20;       // 主题最多翻多少页

    GM_addStyle(`.nga-btn { position: fixed; top: 10px; right: 10px; z-index: 999999; padding: 12px 20px; background: #e67e22; color: white; cursor: pointer; border-radius: 5px; font-weight: bold; border: none; }
.nga-btn.alt { top: 62px; right: 10px; font-size: 12px; padding: 8px 14px; background: #7f8c8d; }
.nga-btn.alt2 { top: 100px; right: 10px; font-size: 12px; padding: 8px 14px; background: #2980b9; }
.nga-btn.alt3 { top: 138px; right: 10px; font-size: 12px; padding: 8px 14px; background: #16a085; }
.nga-btn.alt4 { top: 176px; right: 10px; font-size: 12px; padding: 8px 14px; background: #8e44ad; }
.nga-btn.alt5 { top: 214px; right: 10px; font-size: 12px; padding: 8px 14px; background: #c0392b; }`);

    // ★ 账号资料的唯一来源：资料页 nuke.php?func=ucp&uid=N。
    //   回复页/主题页本身不含 IP属地、注册日期、发帖数，只能额外请求一次。
    const PROFILE_CACHE_TTL = 12 * 3600 * 1000;   // 资料页缓存 12 小时，避免反复戳
    const PROFILE_FIELD_KEYS = ['IP属地', '归属地', 'IP地址', '登录地', '注册日期', '注册时间', '发帖数', '发帖', '用户名', '昵称'];
    // 用于"双解码打分"的关键词：正确编码会大量命中，解错码命中极少
    const PROFILE_SCORE_KEYS = ['属地', '归属', '注册', '发帖', '用户', '资料', '等级', '威望', '登录', '帖子', 'UID'];
    // ★ v57 速度修复：给资料页加硬上限，绝不允许它拖住翻页。
    //   资料页只是"锦上添花"的数据（画像里的一段文字 + 诊断日志），
    //   拿不到就退化成"未获取"，绝不能因此让整次抓取卡住几分钟。
    const PROFILE_REQ_TIMEOUT = 8000;             // 单次资料页请求超时（v56 是 30000）
    const PROFILE_BUDGET_MS = 15000;              // 资料页所有通道加起来的总预算，超了立刻放弃
    const PROFILE_IFRAME_TIMEOUT = 9000;          // iframe 降级通道超时（v56 是 20000）
    const PROFILE_MAX_HOSTS = 2;                  // 最多试几个域名（v56 是 4）
    // ★ v67：资料页其实是【JS 渲染壳】—— 原始 HTML 里一个 <label> 都没有，
    //   字段全在内嵌的 __UCPUSER JSON 里（详见 extractUcpUserShell 的注释）。
    //   解析这个 JSON 就不需要等 JS 跑完；但【未登录时服务器会把 posts/username 抹掉】。
    const PROFILE_IFRAME_LABEL_POLL_MS = 250;     // iframe 等 js_ucp.js 注入 label 的轮询间隔
    const PROFILE_IFRAME_LABEL_POLL_MAX = 10;     // 最多轮询 10 次（≈2.5s）

    // uid：回复页/主题页在 URL 里有 authorid（有时是 uid）
    function resolveUidFromUrl() {
        const sp = new URLSearchParams(window.location.search);
        const cand = sp.get("authorid") || sp.get("uid") || '';
        return /^-?\d+$/.test(cand) && cand !== '0' ? cand : '';
    }
    const uid = resolveUidFromUrl();
    // ★ 回复缓存键【故意保留 v56】不变：这样 v57 能直接复用你之前抓到的回复，
    //   不必从头再翻一遍（翻页才是最花时间的部分）。
    const CACHE_KEY = 'nga_hist_v56_' + (uid || 'unknown');
    // 资料页缓存很便宜（1 个请求），换新键避免沿用旧结构。
    // ★ v67：资料页改走"内嵌 __UCPUSER 壳解析 + iframe 合并"，返回结构多了
    //   _shell / _hiddenByServer / _session，换键避免沿用 v57 的旧结构
    //   （代价只是重新取一次资料，1~2 个请求）。
    const PROFILE_CACHE_KEY = 'nga_profile_v67_' + (uid || 'unknown');

    // ================= 基础工具 =================
    function decodeHTML(str) {
        return str
            .replace(/&nbsp;/g, ' ')
            // ★ v67：NGA 大量使用这几个"窄空格"命名实体（如 <label>发&ensp;帖&ensp;数</label>）。
            //   之前只解 &nbsp;，所以凡是靠"原始 HTML 正则"读 label 的路径全会对不上键名。
            .replace(/&ensp;/g, ' ').replace(/&emsp;/g, ' ').replace(/&thinsp;/g, ' ')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, '&')
            .replace(/&#(\d+);/g, function(m, code) { return String.fromCharCode(parseInt(code, 10)); })
            .replace(/&#x([0-9a-fA-F]+);/g, function(m, hex) { return String.fromCharCode(parseInt(hex, 16)); });
    }

    // 只把 9 位以上的纯数字当 unix 时间戳，避免把 "2024-01-02" 解析成 1970 年
    function formatTime(value) {
        const raw = String(value || '').trim();
        if (!raw || raw === '0') return '未知时间';
        if (!/^\d{9,}$/.test(raw)) return raw;      // 已经是可读日期就直接用
        const d = new Date(parseInt(raw, 10) * 1000);
        if (isNaN(d.getTime())) return raw;
        return d.toLocaleString('zh-CN', {
            timeZone: 'Asia/Shanghai',
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
    }

    // 解析 NGA 的日期文本（含 2 位年份、含/不含时分秒）
    function parseNgaDate(value) {
        // ★ v58 修：主题列表页给的是 2026/07/18 00:02:59（斜杠），旧版只认短横线，
        //   于是"主题精确发布时间可识别 0/21"，最近3天/7天、老号沉寂、新号高强度全部失效。
        const m = String(value || '').match(/(\d{2,4})[-\/.](\d{1,2})[-\/.](\d{1,2})(?:[\sT]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
        if (!m) return null;
        const year = m[1].length === 2 ? 2000 + Number(m[1]) : Number(m[1]);
        const d = new Date(year, Number(m[2]) - 1, Number(m[3]),
            Number(m[4] || 0), Number(m[5] || 0), Number(m[6] || 0));
        return isNaN(d.getTime()) ? null : d;
    }

    // 从 pos 起找下一个 <tag ...>（避免误匹配 <tagxxx）
    function nextOpen(html, tag, pos) {
        const re = new RegExp('<' + tag + '(?=[\\s/>])', 'gi');
        re.lastIndex = pos;
        const m = re.exec(html);
        return m ? m.index : -1;
    }

    // 从开口标签之后找到配对的结束标签（支持同名标签嵌套）
    function matchTagEnd(html, from, tag) {
        const close = '</' + tag + '>';
        const low = html.toLowerCase();
        let depth = 1, i = from;
        while (i < html.length) {
            const nOpen = nextOpen(html, tag, i);
            const nClose = low.indexOf(close, i);
            if (nClose === -1) return html.length;
            if (nOpen !== -1 && nOpen < nClose) { depth++; i = nOpen + tag.length + 1; }
            else { depth--; i = nClose + close.length; if (depth === 0) return nClose; }
        }
        return html.length;
    }

    // 取包含 pos 的那一行 <tr>…</tr>；取不到就退化成一段窗口
    function enclosingRow(html, pos) {
        const s = html.lastIndexOf('<tr', pos);
        const e = html.indexOf('</tr>', pos);
        if (s !== -1 && e !== -1 && e > s && (e - s) < 80000) return html.slice(s, e + 5);
        return html.slice(Math.max(0, pos - 5000), Math.min(html.length, pos + 2000));
    }

    // ================= ★ A1 剔除他人引用 =================
    // NGA 的引用有两种形态：渲染后的 HTML 引用容器，和未渲染的 BBCode [quote]（可嵌套）
    function stripQuoteBlocks(raw) {
        let s = String(raw || '');

        // 1) BBCode [quote] / [quote=xxx] ... [/quote]，按深度配对剥掉（支持嵌套）
        const reTag = /\[(\/?)quote(?:=[^\]]*)?\]/gi;
        let out = '', depth = 0, cursor = 0, m;
        while ((m = reTag.exec(s)) !== null) {
            if (depth === 0) out += s.slice(cursor, m.index);
            depth = m[1] ? Math.max(0, depth - 1) : depth + 1;
            cursor = m.index + m[0].length;
        }
        if (depth === 0) out += s.slice(cursor);
        s = out;

        // 2) HTML 引用容器，循环剥（可能多个）
        for (let guard = 0; guard < 200; guard++) {
            const open = /<(div|fieldset|blockquote)\b[^>]*class=['"][^'"]*quote[^'"]*['"][^>]*>/i.exec(s);
            if (!open) break;
            const tag = open[1].toLowerCase();
            const from = open.index + open[0].length;
            const end = matchTagEnd(s, from, tag);
            if (end >= s.length) break;     // 没找到配对结束标签，宁可保留也不整段吞掉
            s = s.slice(0, open.index) + s.slice(end + tag.length + 3);
        }

        // 3) 裸的引用抬头行（NGA 实际形态：Reply to [pid=..]Reply[/pid] Post by [uid=..]名字[/uid] (时间)）
        return s
            .replace(/Reply\s+to\s*\[pid=[^\]]*\]\s*Reply\s*\[\/pid\]\s*Post\s+by\s*\[uid=[^\]]*\][^\[\]]*\[\/uid\]\s*(?:\([^)]*\))?/gi, '')
            .replace(/Reply\s+to\s*\[pid=[^\]]*\]\s*(?:Reply\s*\[\/pid\]\s*)?Post\s+by\s*\[uid=[^\]]*\][^\[\]]*\[\/uid\]\s*(?:\([^)]*\))?/gi, '')
            .replace(/Reply\s+to\s*\[pid=[^\]]*\]\s*Reply\s*\[\/pid\][^(\n]{0,60}/gi, '');
    }

    // ================= ★ A2 无意义回复过滤 =================
    // v58 修：NGA 的占位符内容是 BBCode 包着的
    //     [color=silver][b]帖子发布或回复时间超过限制[/b][/color]
    // 旧版拿 /^帖子发布或回复时间超过限制/ 去匹配"纯文本开头"，可前缀是 "[color="，
    // 永远匹配不上 —— 于是那些占位符被当成"用户发言"写进导出，还把模型带偏。
    // 现在：先剥 HTML 再剥 BBCode，然后匹配。
    const NOISE_PATTERNS = [
        /^帖子发布或回复时间超过限制/,
        /^帖子发布或回复时间超出限制/,
        /^该用户不存在/,
        /^用户不存在/,
        /^您无权访问/,
        /^无权访问/,
        /^未登录/,
        /^请先登录/,
        /^您需要登录/,
        /^账号已注销/,
        /^帐号已注销/,
        /^帐号权限不足/,
        /^账号权限不足/,
        /^本帖已被锁定/,
        /^本帖已被删除/,
        /^主题已被删除/
    ];
    // 剥掉 BBCode 标签只留文字（仅用于噪声判断，不影响导出原文）
    function stripBBCodeTags(text) {
        return String(text || '')
            .replace(/\[\/?(?:b|i|u|s|del|sup|sub|h|color|size|font|align|quote|url|email|img|list|table|tr|td|th|collapse|code|flash|pid|uid|attach|media|randomblock|tid|fid|@)[^\]]*\]/gi, '')
            .replace(/\[\*\]/g, ' ');
    }
    function isIgnoredContent(text) {
        const raw = String(text || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        const plain = stripBBCodeTags(raw).replace(/\s+/g, ' ').trim();
        if (!plain || plain.length <= 3) return true;
        return NOISE_PATTERNS.some(re => re.test(plain)) || NOISE_PATTERNS.some(re => re.test(raw));
    }

    // ================= 行内字段提取 =================
    function pickTitle(row) {
        const m = row.match(/<a[^>]+class=['"][^'"]*\btopic\b[^'"]*['"][^>]*>([\s\S]*?)<\/a>/i);
        if (!m) return '';
        return decodeHTML(m[1].replace(/<[^>]+>/g, '')).trim();
    }

    // ★ B2：postdate 的 title 才是精确时间，textContent 可能只是"1天前"
    function pickTimeRaw(row) {
        const m = row.match(/<span[^>]*class=['"][^'"]*postdate[^'"]*['"]([^>]*)>([\s\S]*?)<\/span>/i);
        if (!m) return '';
        const attrs = m[1] || '';
        const tm = attrs.match(/title=['"]([^'"]+)['"]/i);
        const title = tm ? tm[1].trim() : '';
        const text = decodeHTML(m[2].replace(/<[^>]+>/g, '')).trim();
        if (title && parseNgaDate(title)) return title;      // 有精确时间优先
        if (/^\d{9,}$/.test(text)) return text;              // 数字时间戳
        return title || text;
    }

    // ★ B4：作者识别 4 条兜底链
    function pickUid(row) {
        let m = row.match(/href=['"]\/nuke\.php\?func=ucp&(?:amp;)?uid=(-?\d+)['"]/i);
        if (m) return m[1];
        m = row.match(/<a[^>]+class=['"][^'"]*(?:\bauthor\b|\buserlink\b)[^'"]*['"][^>]*href=['"][^'"]*[?&](?:amp;)?uid=(-?\d+)/i);
        if (m) return m[1];
        m = row.match(/<a[^>]+href=['"][^'"]*[?&](?:amp;)?uid=(-?\d+)[^'"]*['"][^>]*class=['"][^'"]*(?:\bauthor\b|\buserlink\b)/i);
        if (m) return m[1];
        m = row.match(/<a[^>]+id=['"]postauthor\d*['"][^>]*/i);
        if (m) {
            const u = m[0].match(/[?&](?:amp;)?uid=(-?\d+)/) || m[0].match(/onclick=['"][^'"]*?(\d{2,})/);
            if (u) return u[1];
        }
        m = row.match(/onclick=['"][^'"]*[^\d](-?\d{4,})[^\d]/);
        if (m) return m[1];
        return '';
    }

    // ★ B3：板块（列表页）
    function pickBoard(row) {
        const m = row.match(/<span[^>]*class=['"][^'"]*titleadd2[^'"]*['"][^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i)
               || row.match(/<a[^>]+href=['"][^'"]*thread\.php\?fid=\d+[^'"]*['"][^>]*>([^<]*)<\/a>/i);
        return m ? decodeHTML(m[1].replace(/<[^>]+>/g, '')).trim() : '';
    }

    // ★ B3：楼层小标题 <h3 id="postsubject0">
    function pickSubject(row) {
        const m = row.match(/<h3[^>]*id=['"]postsubject[^'"]*['"][^>]*>([\s\S]*?)<\/h3>/i);
        return m ? decodeHTML(m[1].replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim() : '';
    }

    // ★ C1：总页数探测
    function pickTotalPages(html) {
        const m = html.match(/第\s*\d+\s*页\s*\/\s*共\s*(\d+)\s*页/)
               || html.match(/共\s*(\d+)\s*页/);
        return m ? parseInt(m[1], 10) : 0;
    }

    // ================= 解析：回复 =================
    // 全页扫描，不依赖 <tbody>，不依赖 author / postdate
    // ★ v64：顺便统计"为什么没解析出来" —— 回复块数 / 占位符数 / 被噪声过滤数 /
    //        被作者过滤数，并留下"第一个没被采纳的块"的文本预览。
    //        这样"整页 0 条"能自己说清原因，不用再猜。
    function extractPostsDiag(html, wantUid) {
        const diag = {
            posts: [],
            blocks: 0,
            placeholders: (String(html || '').match(/帖子发布或回复时间超过限制/g) || []).length,
            noiseDropped: 0, emptyDropped: 0, uidDropped: 0, sample: ''
        };
        const out = diag.posts;
        // 容器标签放宽：span / div 都认；id 里的第一个数字是 pid，精确身份
        const re = /<([a-z]+)[^>]*\bid=['"]postcontent(\d+)_(\d+)['"][^>]*>/gi;
        let m;
        while ((m = re.exec(html)) !== null) {
            diag.blocks++;
            const tag = m[1].toLowerCase();
            const pid = m[2];
            const openEnd = m.index + m[0].length;
            const closeIdx = matchTagEnd(html, openEnd, tag);
            const raw = html.slice(openEnd, closeIdx);

            // ★ A1：先剥引用，再剥标签
            const txt = decodeHTML(stripQuoteBlocks(raw))
                .replace(/<br\s*\/?>/gi, '\n')
                .replace(/<[^>]+>/g, '')
                .replace(/\n+/g, '\n')
                .trim();
            // ★ A2：过滤无意义内容
            if (isIgnoredContent(txt)) {
                diag.noiseDropped++;
                if (!txt) diag.emptyDropped++;
                if (!diag.sample) diag.sample = txt ? stripBBCodeTags(txt).replace(/\s+/g, ' ').trim().slice(0, 60) : '(空正文)';
                continue;
            }

            const row = enclosingRow(html, m.index);
            const ruid = pickUid(row);
            // 只在"能确认作者且作者不是目标用户"时才跳过；
            // 拿不到 uid 时一律保留（宁可多留，绝不丢）
            if (wantUid && ruid && ruid !== '0' && ruid !== String(wantUid)) {
                diag.uidDropped++;
                if (!diag.sample) diag.sample = stripBBCodeTags(txt).replace(/\s+/g, ' ').trim().slice(0, 60);
                continue;
            }

            out.push({
                pid: pid,
                uid: ruid,
                title: pickTitle(row) || '无标题',
                time: pickTimeRaw(row),
                board: pickBoard(row),
                subject: pickSubject(row),
                content: txt
            });
        }
        return diag;
    }
    // 兼容旧调用：只要数组
    function extractPosts(html, wantUid) { return extractPostsDiag(html, wantUid).posts; }

    // ================= 解析：主题 =================
    function extractTopics(html) {
        const out = [];
        const seen = new Set();
        const re = /<a[^>]+class=['"][^'"]*\btopic\b[^'"]*['"][^>]*>([\s\S]*?)<\/a>/gi;
        let m;
        while ((m = re.exec(html)) !== null) {
            const title = decodeHTML(m[0].replace(/<[^>]+>/g, '')).replace(/^<a[^>]*>|<\/a>$/g, '');
            const t2 = decodeHTML(m[1].replace(/<[^>]+>/g, '')).trim();
            const name = t2 || title.trim();
            if (!name) continue;
            const hm = m[0].match(/href=['"]([^'"]+)['"]/);
            const url = hm ? hm[1] : '';
            const key = name + '|' + url;
            if (seen.has(key)) continue;
            seen.add(key);

            const row = enclosingRow(html, m.index);
            const timeRaw = pickTimeRaw(row);
            const published = parseNgaDate(timeRaw);
            out.push({
                title: name,
                time: timeRaw,
                url: url,
                forum: pickBoard(row),
                publishedAt: published ? published.toISOString() : '',
                publishedRaw: timeRaw,
                publishedTs: published ? published.getTime() : 0
            });
        }
        return out;
    }

    // ================= ★ B1/B2 账号资料与发帖节奏 =================
    // ---- E1. 原始字节 + 双解码打分：不猜 charset ----
    //   reply 页是 GBK，nuke.php 未必是 GBK；v55 硬写 charset=gbk，
    //   一旦解错码，"IP属地" 这种 label 变乱码 → 字典全空 → 显示"未获取"。
    //   这里两种编码各解一遍，用关键词命中数打分选优。
    function decodeResponseText(buf) {
        let bytes = null;
        if (buf && typeof Uint8Array !== 'undefined' && buf instanceof Uint8Array) bytes = buf;
        else if (buf && typeof ArrayBuffer !== 'undefined' && buf instanceof ArrayBuffer) bytes = new Uint8Array(buf);
        else return { text: '', charset: '无字节流' };
        if (!bytes.length) return { text: '', charset: '空响应' };
        const dec = (label) => { try { return new TextDecoder(label, { fatal: false }).decode(bytes); } catch (e) { return ''; } };
        const utf8 = dec('utf-8');
        const gbk = dec('gb18030');
        const score = (s) => {
            if (!s) return -Infinity;
            let sc = 0;
            PROFILE_SCORE_KEYS.forEach(k => { if (s.indexOf(k) !== -1) sc += 20; });
            if (s.indexOf('\uFFFD') !== -1) sc -= 60;                        // 解错码会出现替换符
            sc += Math.min((s.match(/[\u4e00-\u9fff]/g) || []).length, 600) / 20;
            return sc;
        };
        const su = score(utf8), sg = score(gbk);
        return su >= sg ? { text: utf8, charset: 'utf-8' } : { text: gbk, charset: 'gb18030' };
    }

    // ---- E4. 取原始字节，可重试错误码退避重试 ----
    //   v57：默认只试 1 次、超时 8s（原 2 次 / 30s）。
    //   资料页是可选数据，不值得为它反复重试；重试成本直接算进总预算。
    function httpGetRaw(url, maxAttempts = 1, timeoutMs = PROFILE_REQ_TIMEOUT) {
        const once = () => new Promise((resolve) => {
            let settled = false;
            const done = (v) => { if (!settled) { settled = true; resolve(v); } };
            try {
                GM_xmlhttpRequest({
                    method: "GET", url: url,                     responseType: "arraybuffer",
                    headers: { "Referer": `https://${window.location.host}/`, "User-Agent": navigator.userAgent },
                    timeout: timeoutMs,
                    onload: (res) => {
                        const buf = res.response;
                        if (buf && typeof buf.byteLength === 'number' && buf.byteLength > 0) {
                            const d = decodeResponseText(buf);
                            done({ status: res.status, text: d.text, charset: d.charset, bytes: buf.byteLength, via: '字节流' });
                        } else {
                            const txt = res.responseText || '';
                            done({ status: res.status, text: txt, charset: '未知（管理器未给字节流）', bytes: txt.length, via: '文本' });
                        }
                    },
                    onerror: () => done({ status: 0, text: '', charset: '', bytes: 0, via: 'onerror' }),
                    ontimeout: () => done({ status: 0, text: '', charset: '', bytes: 0, via: 'timeout' })
                });
            } catch (e) {
                done({ status: 0, text: '', charset: '', bytes: 0, via: '异常:' + e.message });
            }
        });
        return (async () => {
            const retryable = RETRYABLE_STATUS.concat([0]);
            let last = { status: 0, text: '', charset: '', bytes: 0, via: '未发送' };
            for (let i = 1; i <= maxAttempts; i++) {
                last = await once();
                if (last.status === 200 && last.text && last.text.indexOf('ERROR:2048') === -1) return last;
                if (!retryable.includes(last.status)) return last;
                if (i < maxAttempts) await new Promise(r => setTimeout(r, 2500 * i + Math.random() * 1200));
            }
            return last;
        })();
    }

    // ---- E2. 通道二：同源隐藏 iframe（真实导航，浏览器负责解码，登录态最完整） ----
    function loadProfileViaIframe(targetUid, timeoutMs = PROFILE_IFRAME_TIMEOUT) {
        return new Promise((resolve) => {
            const frame = document.createElement('iframe');
            frame.setAttribute('aria-hidden', 'true');
            frame.setAttribute('referrerpolicy', 'unsafe-url');
            frame.style.cssText = 'position:fixed;width:1px;height:1px;left:-9999px;top:-9999px;border:0;opacity:0;pointer-events:none';
            let done = false;
            const finish = (v) => {
                if (done) return;
                done = true;
                clearTimeout(timer);
                try { frame.remove(); } catch (e) {}
                resolve(v);
            };
            const timer = setTimeout(() => finish(null), timeoutMs);
            frame.onload = () => {
                try {
                    const doc = frame.contentDocument;
                    if (!doc || !doc.body) return finish(null);
                    const text = (doc.body.textContent || '').replace(/\s+/g, ' ');
                    if (!text) return finish(null);
                    if (text.indexOf('ERROR:2048') !== -1) return finish({ error: 'ERROR:2048（限流）' });
                    // ★ v67：ucp_block 里的 label 是 js_ucp.js【异步注入】的，onload 时经常还没渲染。
                    //   老版 2.txt（v2.4.54）就是靠轮询 #ucpuser_info_blockContent label 才稳的，
                    //   这里补回这一步：最多等 PROFILE_IFRAME_LABEL_POLL_MAX × 250ms ≈ 2.5s。
                    const grab = (polled) => finish({
                        doc: doc,
                        html: doc.documentElement.outerHTML || '',
                        text: (doc.body.textContent || '').replace(/\s+/g, ' '),
                        polled: polled || 0
                    });
                    let tries = 0;
                    const waitLabels = () => {
                        if (done) return;
                        let ready = false;
                        try {
                            ready = !!doc.querySelector('#ucpuser_info_blockContent .inlineblock, #ucp_block .inlineblock');
                        } catch (e) { ready = false; }
                        if (ready || tries >= PROFILE_IFRAME_LABEL_POLL_MAX) return grab(tries);
                        tries++;
                        setTimeout(waitLabels, PROFILE_IFRAME_LABEL_POLL_MS);
                    };
                    waitLabels();
                } catch (e) {
                    finish({ error: '读不到 iframe 内容（可能被 X-Frame-Options 拦住）: ' + e.message });
                }
            };
            frame.onerror = () => finish(null);
            frame.src = `https://${window.location.host}/nuke.php?func=ucp&uid=${encodeURIComponent(targetUid)}#nga-profile-probe`;
            document.body.appendChild(frame);
        });
    }

    // ---- 字段字典：HTML 文本 与 真实 DOM 两条解析路径 ----
    function normFieldKey(value) {
        return decodeHTML(String(value || '').replace(/<[^>]+>/g, ''))
            .replace(/[\s\u00a0\u2000-\u200b:：]/g, '').toUpperCase();
    }
    function collectFieldsFromHtml(html) {
        const fields = {};
        const reLabel = /<label[^>]*>([\s\S]*?)<\/label>([\s\S]{0,300}?)(?=<label|<\/div>|<\/td>|<\/tr>|$)/gi;
        let m;
        while ((m = reLabel.exec(html)) !== null) {
            const key = normFieldKey(m[1]);
            // ★ v67：顺手剥掉值前面的 ": "（页面渲染是 <label>键</label><span> : 值</span>）
            const val = decodeHTML(m[2].replace(/<[^>]+>/g, ' ')).replace(/^[\s:：]+/, '').replace(/\s+/g, ' ').trim();
            if (key && val && val !== key) fields[key] = val;
        }
        return fields;
    }
    function collectFieldsFromDoc(doc) {
        const fields = {};
        try {
            // 2.txt 已验证的容器优先；容器名变了就退化成"扫全文档 label"
            const blocks = doc.querySelectorAll('#ucpuser_info_blockContent .inlineblock, #ucp_block .inlineblock');
            const scopes = blocks.length
                ? Array.from(blocks)
                : Array.from(doc.querySelectorAll('label')).map(l => l.parentElement).filter(Boolean);
            scopes.forEach(block => {
                const labelNode = block && block.querySelector ? block.querySelector('label') : null;
                if (!labelNode) return;
                const key = normFieldKey(labelNode.textContent);
                const valueNode = labelNode.nextElementSibling;
                const value = String((valueNode ? valueNode.textContent : block.textContent) || '')
                    .replace(/^[\s:：]+/, '').replace(/关注\s*$/, '').replace(/\s+/g, ' ').trim();
                if (key && value && value !== key) fields[key] = value;
            });
        } catch (e) { GM_log('collectFieldsFromDoc 失败: ' + e); }
        return fields;
    }
    function pickField(fields, plain, keys) {
        for (const k of keys) {
            const up = k.toUpperCase();
            if (fields[up]) return fields[up];
        }
        for (const k of keys) {
            const mm = String(plain || '').match(new RegExp(k + '\\s*[:：]?\\s*([^\\s，,。|]{1,30})'));
            if (mm) return mm[1].trim();
        }
        return '';
    }
    // E5. 顺带把用户名从资料页标题里捞出来（导出文件名/Prompt 占位）
    function pickUsernameFromTitle(title) {
        let t = decodeHTML(String(title || '')).replace(/\s+/g, ' ').trim();
        if (!t) return '';
        t = t.split(/[-_|｜–—·]/)[0].trim()
            .replace(/的个人资料|的用户资料|个人资料|用户资料|用户中心|资料|主页/g, '')
            .replace(/[（(].*?[)）]/g, '').trim();
        if (t.length < 2 || t.length > 20) return '';
        if (/NGA|玩家社区|登录|错误|提示|请先|不存在|无权限/.test(t)) return '';
        return t;
    }
    function hasKeyProfileFields(p) { return !!(p && (p.ip || p.registeredAt || p.postsRaw)); }

    // ---- ★ v67：资料页其实是「JS 渲染壳」，字段藏在页面内嵌的 __UCPUSER 里 ----
    // 证据（2026-09-14 用匿名请求实测 https://bbs.nga.cn/nuke.php?func=ucp&uid=21518829）：
    //   ① 原始 HTML 里【一个 <label> 都没有】，只有一个空容器 <div id='ucp_block'></div>；
    //   ② 页面脚本是 loader.script(__SCRIPTS.ucp, function(){ commonui.ucp.load(uid,0,$('ucp_block')) })，
    //      而 js_ucp.js 的 load() 第一句就是
    //          if (window.__UCPUSER) return this._echo(window.__UCPUSER, o)
    //      ——【那一堆 <label> 全是这个内嵌 JSON 渲染出来的】；
    //   ③ 它的渲染循环里有 `if (!arguments[i] || !arguments[i+1]) continue`，
    //      所以值为 0 / 空 的行【根本不渲染】（这就是"未登录看不到发帖数"的真实原因）。
    // 结论：GM 通道拿原始 HTML 去扫 <label> 【永远扫不到】。v66 日志里那句
    //      "内容取到了，但按 gb18030 解码后没解析出字段" 是【误报】，不是抓取失败。
    // 另外：未登录时服务器会把 username 换成 "UID<uid>" 占位、posts/lastvisit 一律归零，
    //      这不是"这人没发过帖"，是【被服务器隐藏】——绝不能写成 发帖数=0。
    function extractUcpUserShell(html) {
        const text = String(html || '');
        const at = text.indexOf('__UCPUSER');
        if (at === -1) return null;
        const seg = text.slice(at, at + 6000);
        const brace = seg.indexOf('{');
        if (brace === -1) return null;
        // 花括号配对取整个对象（JSON 里有嵌套对象，不能靠正则）
        let depth = 0, end = -1, inStr = false, esc = false;
        for (let i = brace; i < seg.length; i++) {
            const c = seg.charAt(i);
            if (inStr) {
                if (esc) esc = false;
                else if (c === '\\') esc = true;
                else if (c === '"') inStr = false;
                continue;
            }
            if (c === '"') { inStr = true; continue; }
            if (c === '{') depth++;
            else if (c === '}') { depth--; if (depth === 0) { end = i; break; } }
        }
        if (end === -1) return null;
        const raw = seg.slice(brace, end + 1);
        let obj = null;
        try { obj = JSON.parse(raw); } catch (e) { obj = null; }
        if (!obj || typeof obj !== 'object') {
            // 兜底：逐键正则（防它哪天塞进尾逗号 / undefined 之类的脏数据）
            const pickStr = (k) => {
                const m = raw.match(new RegExp('"' + k + '"\\s*:\\s*"([^"]*)"'));
                return m ? decodeHTML(m[1]) : '';
            };
            const pickNum = (k) => {
                const m = raw.match(new RegExp('"' + k + '"\\s*:\\s*(-?\\d+)'));
                return m ? Number(m[1]) : 0;
            };
            obj = {
                uid: pickNum('uid'), username: pickStr('username'), group: pickStr('group'),
                regdate: pickNum('regdate'), ipLoc: pickStr('ipLoc'), posts: pickNum('posts'),
                money: pickNum('money'), fame: pickNum('fame'),
                lastvisit: pickNum('lastvisit'), thisvisit: pickNum('thisvisit'), lastpost: pickNum('lastpost')
            };
        }
        obj._raw = raw;
        return obj;
    }

    // ---- 页面里还写着【当前会话】的登录态，正好判断 GM 通道到底带没带 Cookie ----
    //   `var __CURRENT_UID = parseInt('',10)` / `var __CURRENT_UNAME = ''` → 空 = 未登录
    function extractSessionState(html) {
        const text = String(html || '');
        const mu = text.match(/__CURRENT_UID\s*=\s*parseInt\(\s*['"]([^'"]*)['"]/);
        const mn = text.match(/__CURRENT_UNAME\s*=\s*['"]([^'"]*)['"]/);
        const sid = (mu && /^-?\d+$/.test(mu[1]) && mu[1] !== '0') ? mu[1] : '';
        const uname = mn ? mn[1] : '';
        return { loggedIn: !!(sid || uname), uid: sid, uname: uname };
    }

    // ---- 时间戳 → "YYYY-MM-DD HH:mm:ss"（与 NGA 页面 commonui.time2date 的显示一致）----
    function fmtTs(ts) {
        const n = Number(ts);
        if (!Number.isFinite(n) || n <= 0) return '';
        const d = new Date(n * 1000);
        if (isNaN(d.getTime())) return '';
        const p = (x) => (x < 10 ? '0' + x : '' + x);
        return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate())
            + ' ' + p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
    }

    // ---- 用 __UCPUSER 拼出与 iframe 同构的 profile（键名与页面 label 完全一致）----
    function buildProfileFromShell(shell, meta) {
        const fields = {};
        const uid0 = (shell && shell.uid) ? String(shell.uid) : '';
        if (uid0) fields['用户ID'] = uid0;
        if (shell && shell.group) fields['用户组'] = String(shell.group);
        if (shell && shell.ipLoc) fields['IP属地'] = String(shell.ipLoc);
        if (shell && shell.regdate) {
            const t = fmtTs(shell.regdate);
            if (t) fields['注册日期'] = t;
        }
        if (shell && shell.thisvisit) { const t = fmtTs(shell.thisvisit); if (t) fields['最近访问'] = t; }

        const hidden = [];
        const uname = String((shell && shell.username) || '');
        // 未登录时服务器把用户名换成 "UID<uid>"（占位符），那不是真名
        if (uname && uid0 && uname !== 'UID' + uid0) fields['用户名'] = uname;
        else hidden.push('用户名');
        if (shell && Number(shell.posts) > 0) fields['发帖数'] = String(shell.posts);
        else hidden.push('发帖数');

        const prof = buildProfile(fields, '', {
            channel: (meta && meta.channel) || '内嵌 __UCPUSER',
            status: (meta && meta.status) || 200,
            charset: (meta && meta.charset) || '',
            bytes: (meta && meta.bytes) || 0,
            attempts: (meta && meta.attempts) || [],
            errors: (meta && meta.errors) || []
        });
        prof._shell = shell || null;
        prof._hiddenByServer = hidden;
        prof._session = (meta && meta.session) || null;
        return prof;
    }

    // ---- 资料是否"齐全"：缺任何一项都继续走 iframe 通道 ----
    function isProfileComplete(p) {
        if (!p) return false;
        if (!(p.ip && p.registeredAt && p.postsRaw && p.username)) return false;
        return !(p._hiddenByServer && p._hiddenByServer.length);
    }

    // ---- 合并两条通道：iframe（跑完 JS、带登录态）优先，GM/壳 补空缺 ----
    //   哪怕 iframe 失败，也别浪费壳里已经拿到的 IP属地/注册日期。
    function mergeProfiles(base, extra) {
        if (!base) return extra || null;
        if (!extra) return base;
        const out = Object.assign({}, base);
        ['ip', 'registeredAt', 'postsRaw', 'username'].forEach(k => { if (extra[k]) out[k] = extra[k]; });
        out._all = Object.assign({}, base._all || {});
        Object.keys(extra._all || {}).forEach(k => { out._all[k] = extra._all[k]; });
        const chans = [];
        if (base._channel) chans.push(base._channel);
        if (extra._channel) chans.push(extra._channel);
        out._channel = chans.join(' ＋ ');
        out._bytes = extra._bytes || base._bytes;
        out._charset = extra._charset || base._charset;
        out._status = extra._status || base._status;
        out._shell = base._shell || null;
        out._session = base._session || extra._session || null;
        out._hiddenByServer = [];
        if (!out.postsRaw) out._hiddenByServer.push('发帖数');
        if (!out.username) out._hiddenByServer.push('用户名');
        out._failReason = '';
        return out;
    }


    // ---- 资料页缓存（12 小时），避免反复戳 ----
    function loadProfileCache() {
        try {
            let raw = '';
            if (typeof GM_getValue === 'function') raw = GM_getValue(PROFILE_CACHE_KEY, '');
            if (!raw) { try { raw = localStorage.getItem(PROFILE_CACHE_KEY) || ''; } catch (e) {} }
            if (!raw) return null;
            const obj = JSON.parse(raw);
            if (!obj || !obj.savedAt || (Date.now() - obj.savedAt) > PROFILE_CACHE_TTL) return null;
            if (!hasKeyProfileFields(obj.profile)) return null;
            return obj.profile;
        } catch (e) { return null; }
    }
    function saveProfileCache(profile) {
        try {
            const payload = JSON.stringify({ savedAt: Date.now(), profile: profile });
            if (typeof GM_setValue === 'function') GM_setValue(PROFILE_CACHE_KEY, payload);
            else localStorage.setItem(PROFILE_CACHE_KEY, payload);
        } catch (e) {}
    }

    // ---- 主入口：资料页双通道抓取 ----
    async function fetchProfile(targetUid, options) {
        const opts = options || {};
        const empty = { ip: '', registeredAt: '', postsRaw: '', username: '', _all: {}, _attempts: [], _errors: [] };
        if (!/^-?\d+$/.test(String(targetUid || '')) || targetUid === '0') {
            return Object.assign({}, empty, { _channel: '未发起', _failReason: '没有可用的 uid' });
        }

        if (!opts.noCache) {
            const cached = loadProfileCache();
            if (cached) { cached._fromCache = true; return cached; }
        }

        const attempts = [], errors = [];
        // ★ v57：总预算硬上限。资料页是"锦上添花"的可选数据，
        //   超预算立刻放弃（返回部分结果或"未获取"），绝不允许拖住翻页。
        const deadline = Date.now() + PROFILE_BUDGET_MS;
        const hosts = [window.location.host, 'bbs.nga.cn', 'ngabbs.com', 'nga.178.com']
            .filter((h, i, a) => h && a.indexOf(h) === i)
            .slice(0, PROFILE_MAX_HOSTS);
        let shellProf = null;      // GM 通道：解析内嵌 __UCPUSER
        let iframeProf = null;     // iframe 通道：浏览器跑完 JS 后的 label
        let skippedIframe = '';    // 非空 = iframe 没跑成（这种结果不写缓存，下次点开始能补）

        // 通道一：GM_xmlhttpRequest（原始字节 + 双解码打分 → 内嵌 __UCPUSER）
        for (const host of hosts) {
            const restMs = deadline - Date.now();
            if (restMs <= 1500) { errors.push('资料页总耗时已达预算上限，放弃剩余域名（不影响翻页）'); skippedIframe = '预算不足'; break; }
            const url = `https://${host}/nuke.php?func=ucp&uid=${encodeURIComponent(targetUid)}`;
            let res;
            try { res = await httpGetRaw(url, 1, Math.min(PROFILE_REQ_TIMEOUT, restMs)); }
            catch (e) { res = { status: 0, text: '', charset: '', bytes: 0, via: '异常:' + e.message }; }
            const sess = extractSessionState(res.text);
            attempts.push(`${host} GM通道 → HTTP ${res.status} / ${res.bytes} 字节 / 编码判定 ${res.charset || '无'} / 取到 ${res.via}`
                + ` / 登录态 ${sess.loggedIn ? '已登录' + (sess.uname ? '（' + sess.uname + '）' : '（uid=' + sess.uid + '）') : '未登录（这个通道没带上 Cookie）'}`);
            if (res.status !== 200) { errors.push(`${host}: HTTP ${res.status}`); continue; }
            if (res.text.indexOf('ERROR:2048') !== -1) { errors.push(`${host}: 返回 ERROR:2048（限流，稍后再点一次）`); continue; }

            // ★ v67：先按"JS 渲染壳"解析内嵌 __UCPUSER —— 这才是资料页真实的数据源
            const shell = extractUcpUserShell(res.text);
            if (shell) {
                const prof = buildProfileFromShell(shell, {
                    channel: `GM_xmlhttpRequest @ ${host}（内嵌 __UCPUSER）`, status: res.status,
                    charset: res.charset, bytes: res.bytes, attempts: attempts, errors: errors, session: sess
                });
                if (!shellProf || !hasKeyProfileFields(shellProf)) shellProf = prof;
                if (isProfileComplete(shellProf)) {
                    shellProf._attempts = attempts; shellProf._errors = errors;
                    saveProfileCache(shellProf);
                    return shellProf;
                }
                const miss = (shellProf._hiddenByServer || []).join('、') || '无';
                attempts.push(`${host} 已解析内嵌 __UCPUSER（缺 ${miss}），跳过剩余域名省请求，转 iframe 通道`);
                break;
            }

            // 没找到 __UCPUSER：可能是提示页/风控页，也可能页面又改版了
            const fields = collectFieldsFromHtml(res.text);
            if (Object.keys(fields).length) {
                const flat = decodeHTML(res.text.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');
                const prof = buildProfile(fields, flat, {
                    channel: `GM_xmlhttpRequest @ ${host}（原始 HTML 里的 label）`, status: res.status,
                    charset: res.charset, bytes: res.bytes, attempts: attempts, errors: errors
                });
                if (!prof.username) prof.username = pickUsernameFromTitle((res.text.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '');
                if (!shellProf) shellProf = prof;
                if (isProfileComplete(shellProf)) {
                    shellProf._attempts = attempts; shellProf._errors = errors;
                    saveProfileCache(shellProf);
                    return shellProf;
                }
                errors.push(`${host}: 原始 HTML 里有 label（页面改版了？）但没凑齐关键字段`);
            } else {
                const head = String(res.text.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<[^>]+>/g, ' '))
                    .replace(/\s+/g, ' ').trim().slice(0, 80);
                errors.push(`${host}: 原始 HTML 里既没有 __UCPUSER 也没有 label（疑似提示页/风控页），可见文本前 80 字：「${head}」`);
            }
        }

        // 通道二：隐藏 iframe（浏览器自己跑 JS，label 才被注入；登录态最全）
        //   v57：预算不足就直接跳过，绝不让它再吃掉 9~20 秒。
        const restForIframe = deadline - Date.now();
        let fr = null;
        if (restForIframe <= 2000) {
            errors.push('资料页总耗时已达预算上限，跳过 iframe 通道（不影响翻页）');
            skippedIframe = skippedIframe || '预算不足';
        } else {
            fr = await loadProfileViaIframe(targetUid, Math.min(PROFILE_IFRAME_TIMEOUT, restForIframe));
            if (!(fr && fr.doc)) skippedIframe = 'iframe 通道没跑成';
        }
        if (fr && fr.doc) {
            const htmlFields = collectFieldsFromHtml(fr.html);
            const fields = collectFieldsFromDoc(fr.doc);
            Object.keys(htmlFields).forEach(k => { if (!fields[k]) fields[k] = htmlFields[k]; });
            iframeProf = buildProfile(fields, fr.text || '', {
                channel: '隐藏 iframe（浏览器跑完 JS）', status: 200, charset: '浏览器自动',
                bytes: (fr.html || '').length, attempts: attempts, errors: errors
            });
            if (!iframeProf.username) iframeProf.username = pickUsernameFromTitle(fr.doc.title || '');
            if (fr.polled) iframeProf._polled = fr.polled;
            if (fr.done) iframeProf._done = fr.done;
        } else if (fr) {
            errors.push('iframe 通道失败: ' + (fr.error || '页面拒绝被嵌入'));
            skippedIframe = 'iframe 通道被拒';
        }

        // 合并：iframe 优先，GM/壳 补空缺
        const merged = mergeProfiles(shellProf, iframeProf) || Object.assign({}, empty);
        merged._attempts = attempts;
        merged._errors = errors;
        merged._skippedIframe = skippedIframe;
        if (!merged._channel) merged._channel = '两条通道都失败';
        if (!hasKeyProfileFields(merged)) {
            merged._failReason = '两条通道都没取到 IP属地/注册日期/发帖数。最常见原因：'
                + '①该 uid 不存在或已注销 ②NGA 返回了提示页/风控页（看上面"失败记录"里那句可见文本）③NGA 临时限流。';
        } else if (merged._hiddenByServer && merged._hiddenByServer.length) {
            merged._failReason = '';
            merged._note = '这些字段被服务器对【未登录会话】隐藏了（不是"没有"）：' + merged._hiddenByServer.join('、');
        }
        // 缓存策略：两轮通道都真的跑过了才写缓存（"最好的努力"），
        // 半途因为预算/被拒而没跑 iframe 的结果不写 —— 下次点开始还能补上。
        if (hasKeyProfileFields(merged) && !skippedIframe) saveProfileCache(merged);
        else if (hasKeyProfileFields(merged)) attempts.push(`本次没跑完 iframe（${skippedIframe}），不写缓存，下次点开始会自动重取`);
        return merged;
    }

    function buildProfile(fields, plain, meta) {
        const pick = (...keys) => pickField(fields, plain, keys);
        const prof = {
            ip: pick('IP属地', '归属地', 'IP地址', '登录地'),
            registeredAt: pick('注册日期', '注册时间'),
            postsRaw: pick('发帖数', '发帖'),
            // ★ 用户名只认 label 字典，不能走纯文本兜底：
            //   资料页标题里就有"某某个人资料"，纯文本匹配 "用户名" 会抠出"个人资料"这种垃圾
            username: pickField(fields, '', ['用户名', '昵称']),
            _all: fields,
            _channel: (meta && meta.channel) || '',
            _status: meta ? meta.status : 0,
            _charset: (meta && meta.charset) || '',
            _bytes: (meta && meta.bytes) || 0,
            _attempts: (meta && meta.attempts) || [],
            _errors: (meta && meta.errors) || [],
            _failReason: ''
        };
        if (!hasKeyProfileFields(prof)) {
            prof._failReason = (meta && meta.emptyReason) || '资料页有内容，但没解析出 IP属地/注册日期/发帖数（字段名可能又改了，看调试面板）';
        }
        return prof;
    }

    function buildAccountFacts(profile, topics) {
        if (!profile || !profile._all) return { text: '未抓取到账号资料（资料页读取失败或该 uid 不可访问）', rhythm: null, days: 0, posts: NaN };

        const posts = Number(String(profile.postsRaw || '').replace(/[^\d]/g, ''));
        const reg = parseNgaDate(profile.registeredAt);
        let days = 0;
        if (reg) {
            const now = new Date();
            days = Math.max(1, Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
                - Date.UTC(reg.getFullYear(), reg.getMonth(), reg.getDate())) / 86400000) + 1);
        }
        const perDay = days && Number.isFinite(posts) && posts ? posts / days : null;

        // ---- 发帖节奏（依赖主题的精确发布时间）----
        const now = Date.now(), DAY = 86400000;
        const ts = (topics || []).map(t => t.publishedTs).filter(Boolean);
        const unrecognized = (topics || []).filter(t => !t.publishedTs).length;
        const in7 = ts.filter(t => now - t <= 7 * DAY).length;
        const in3 = ts.filter(t => now - t <= 3 * DAY).length;
        const old1y = ts.filter(t => now - t > 365 * DAY).length;
        const mid = ts.filter(t => now - t > 7 * DAY && now - t <= 365 * DAY).length;

        const rhythm = {
            recognized: ts.length,
            unrecognized: unrecognized,
            in7, in3, old1y, mid,
            per3: in3 / 3,
            dormantReactivated: (days > 3 * 365 && in7 === 1 && old1y > 0 && mid === 0 && unrecognized === 0),
            newHighIntensity: (days > 0 && days <= 31 && in3 >= 12 && in3 / 3 >= 4)
        };

        const lines = [
            `IP属地：${profile.ip || '未获取'}`,
            `注册日期：${profile.registeredAt || '未获取'}`,
            `账号天数（含注册当日）：${days || '无法计算'}`,
            `总发帖数：${Number.isFinite(posts) && posts ? posts : '未获取'}`,
            `历史日均发帖：${perDay ? perDay.toFixed(2) + ' 条/日' : '无法计算'}`,
            // ★ v67：未登录会话拿不到发帖数/用户名，要说清是"服务器不给"，不是"这人不发帖"
            ((profile._hiddenByServer && profile._hiddenByServer.length && !posts)
                ? `说明：${profile._hiddenByServer.join('、')} 被资料页对【未登录会话】隐藏了（不是"没有"），本次未取到。`
                : null),
            `可见主题总数（本次抓到）：${(topics || []).length} 个`,
            `其中可识别精确发布时间的：${ts.length} 个（数据来源：主题列表，非全部历史）`,
            `最近7天可见主题：${in7} 个，约 ${(in7 / 7).toFixed(2)} 个/日`,
            `最近3天可见主题：${in3} 个，约 ${rhythm.per3.toFixed(2)} 个/日`,
            `一年以前的可见主题：${old1y} 个`,
            `最近7天至一年内的可见主题：${mid} 个`,
            `无法识别时间的可见主题：${unrecognized} 个`,
            `新号高强度发帖阈值（账号≤31天 且 最近3天≥12个 且 日均≥4个可见主题）：${rhythm.newHighIntensity ? '已命中' : '未命中'}`,
            `老号沉寂后突发主题信号（注册>3年 且 最近7天恰有1个主题 且 其余可识别主题均>1年）：${rhythm.dormantReactivated ? '已命中' : '未命中'}`
        ];

        const extra = Object.keys(profile._all || {}).filter(k => !['IP属地', 'IP地址', '归属地', '登录地', '注册日期', '注册时间', '发帖数', '发帖', '用户名', '昵称'].includes(k));
        if (extra.length) {
            lines.push('资料页其他可见字段：' + extra.map(k => `${k}=${profile._all[k]}`).join('；'));
        }
        if (profile._failReason) {
            lines.push(`资料页抓取失败原因：${profile._failReason}`);
        }
        return { text: lines.join('\n'), rhythm, days, posts };
    }

    // ================= 结果仓库（按 pid / url 精确去重） =================
    const postStore = new Map();   // pid -> {pid,uid,title,time,board,subject,content}
    const topicStore = new Map();  // key -> topic

    function loadCache() {
        try {
            let raw = '';
            if (typeof GM_getValue === 'function') raw = GM_getValue(CACHE_KEY, '');
            if (!raw) { try { raw = localStorage.getItem(CACHE_KEY) || ''; } catch (e) {} }
            if (!raw) return 0;
            const arr = JSON.parse(raw);
            (arr.posts || []).forEach(p => { if (p && p.pid) postStore.set(String(p.pid), p); });
            (arr.topics || []).forEach(t => { if (t && t.title) topicStore.set(t.title + '|' + (t.url || ''), t); });
            return arr.posts ? arr.posts.length : 0;
        } catch (e) {
            GM_log('载入缓存失败: ' + e);
            return 0;
        }
    }

    function saveCache() {
        try {
            const raw = JSON.stringify({ posts: Array.from(postStore.values()), topics: Array.from(topicStore.values()) });
            if (typeof GM_setValue === 'function') GM_setValue(CACHE_KEY, raw);
            else localStorage.setItem(CACHE_KEY, raw);
            return true;
        } catch (e) {
            GM_log('保存缓存失败: ' + e);
            return false;
        }
    }

    // ================= 网络 =================
    // ---- v59：统一的等待助手 / 限流判定（所有节流都走这里，方便一处调参）----
    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    // ★ v63：回到 v54 的单档等待（8~20s）。
    //   旧版那套 "12s/25s/40s/60s/90s 越等越长" 是配合"在 5 秒内连击同一页"用的；
    //   v63 已经回到 v54 的"一页一个请求、拿不到就翻下一页"，所以只需要一个温和的等待。
    function cooldownFor(hits, status) {
        return PAGE_RETRY_WAIT_MS + Math.random() * PAGE_RETRY_WAIT_JITTER;
    }


    function describeFetchFail(r) {
        if (!r) return '无响应';
        const s = String(r.html || '');
        const ri = refusalInfo(r);
        return (r.via || '?') + ' HTTP ' + r.status
            + (ri.isRefusal
                ? '（NGA 拒绝页' + (ri.code ? ' ' + ri.code : '') + (ri.msg ? ' "' + ri.msg + '"' : '')
                  + (ri.viaHeader ? ' / 依据=响应头 short-message' : '') + '）'
                : '')
            + (!ri.isRefusal && s.length ? '（正文 ' + s.length + ' 字节）' : '');
    }


    function fetchPage(url) {
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                overrideMimeType: "text/html; charset=gbk",
                headers: {
                    "Referer": `https://${window.location.host}/`,
                    "User-Agent": navigator.userAgent
                },
                timeout: 30000,
                onload: (res) => resolve(res),
                onerror: () => resolve({ status: 0 }),
                ontimeout: () => resolve({ status: 0 })
            });
        });
    }

    // ================= ★ v58 新增：页面可用性 / 占位符识别 / iframe 通道 =================

    // ★★★ v60 核心修正：正确识别 NGA 的"拒绝页" ★★★
    //   实测（2026-09-14，bbs.nga.cn 真实响应，同 ngabbs.com）：
    //     HTTP/1.1 200 OK
    //     Content-Type: text/html; charset=GBK
    //     X-NGA-CONTENT-TYPE: short-message        ← NGA 自己打的标记
    //     正文 2952 字节，"<title>你必须登录</title>"
    //     (ERROR:<!--msgcodestart-->2048<!--msgcodeend-->) <!--msginfostart-->你必须登录<!--msginfoend-->
    //
    //   ★ 注意最后一行：错误码 2048 被 HTML 注释劈开了，字符串 "ERROR:2048"
    //     【根本不连续存在】。所以从 v54 起一直用的 html.indexOf('ERROR:2048')
    //     从来没命中过这张页 —— 这是个老 bug，不是节流问题。
    //   正确锚点：响应头 X-NGA-CONTENT-TYPE: short-message，
    //   或正文里的 msgcodestart-->数字 / msginfostart-->文字（都兼容老格式 ERROR:2048）。
    function parseResponseHeaders(rawHeaders) {
        const out = {};
        String(rawHeaders || '').split(/\r?\n/).forEach(function (line) {
            const i = line.indexOf(':');
            if (i <= 0) return;
            out[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim();
        });
        return out;
    }

    // 这一页是不是 NGA 的"提示页"？返回结构化判定（kind 决定含义）。
    //   ★★★ v63 核心：NGA 的 short-message 提示页长得一模一样，但 msginfo 那行文字决定完全相反的动作：
    //     kind = 'end'     「没有符合条件的结果」      → 这个人没有更多回复了 → 【停止翻页，正常结束】
    //     kind = 'login'   「你必须登录」             → 登录态失效 → 记一笔、继续（收尾提示你重新登录）
    //     kind = 'limit'   「操作过于频繁」等其他提示 → 可能被限流 → 记一笔、继续
    //     kind = 'placeholder'「帖子发布或回复时间超过限制」→ 原帖被冲水 → 安静跳过
    function refusalInfo(res) {
        const html = String((res && res.html) || '');
        const hdrs = parseResponseHeaders(res && res.headers);
        const shortHdr = /short-message/i.test(hdrs['x-nga-content-type'] || '');
        const mCode = html.match(/msgcodestart\s*-->\s*(-?\d+)\s*<!--\s*msgcodeend/i);
        const mInfo = html.match(/msginfostart\s*-->\s*([\s\S]{0,160}?)<!--\s*msginfoend/i);
        const legacy = html.match(/ERROR:\s*(\d{3,4})/);                       // 兼容老格式
        const code = mCode ? mCode[1] : (legacy ? legacy[1] : '');
        const info = mInfo ? mInfo[1].replace(/<[^>]*>/g, '').trim() : '';
        const title = ((html.match(/<title[^>]*>([\s\S]{0,80}?)<\/title>/i) || [])[1] || '').trim();
        const loginWord = /你必须登录|请先登录|需要登录|登录后才能|您需要登录|请登录后|登录后可见/;
        const isLogin = /登录/.test(info + title) || loginWord.test(html);
        // 防误杀：真正的内容页一定有 postcontent / topic 结构。只有"没有内容结构"的
        // 短页才允许用"正文里出现登录字样"兜底判定，避免把正文里恰好提到"需要登录"的
        // 正常帖子误判成提示页。
        const looksContentful = /id=['"]postcontent\d+_\d+['"]/.test(html) || /class=['"]topic['"]/.test(html);
        const isShortLike = shortHdr || !!mCode || !!mInfo
            || html.indexOf('ERROR:2048') !== -1
            || (!looksContentful && html.length > 0 && html.length <= 20000 && isLogin);
        const msg = info || title;
        // ★ v63：分类。end 优先 —— 它是"正常结束"，绝不能被当成"被拒绝"。
        const kind = !isShortLike ? ''
            : (END_MSG_RE.test(msg) || END_MSG_RE.test(title) || (!looksContentful && END_MSG_RE.test(html)) ? 'end'
                : (PLACEHOLDER_MSG_RE.test(msg) ? 'placeholder'
                    : (isLogin ? 'login' : 'limit')));
        return {
            isRefusal: kind === 'login' || kind === 'limit',   // end / placeholder 不算"拒绝"
            kind: kind, code: code, msg: msg, isLogin: isLogin, viaHeader: shortHdr
        };
    }


    // 一页回复的"质量"：多少个正文块、多少个占位符
    //   NGA 有时不返回正文，整页只回"帖子发布或回复时间超过限制"
    function replyPageQuality(html) {
        const s = String(html || '');
        const blocks = (s.match(/id=['"]postcontent\d+_\d+['"]/g) || []).length;
        const placeholders = (s.match(/帖子发布或回复时间超过限制/g) || []).length;
        return {
            blocks: blocks,
            placeholders: placeholders,
            // ★ v62：放宽为 placeholders > 0 —— 被冲水的页面有两种形态：
            //   ① 有 N 个回复块、块内全是占位符；② 连 postcontent 块都没有，整页只有一句提示。
            //   原来要求 blocks > 0，形态②会被漏掉，于是它被误判成「整页没有回复块 = 到底了」。
            allPlaceholder: placeholders > 0 && placeholders >= Math.ceil(blocks * 0.8)
        };
    }

    // 这一页到底能不能用。
    //   ★ v60：这里【只】排掉"根本不是内容页"的响应（拒绝页 / 空响应），
    //   不再拿"小于 5000 字节"当闸门 —— 那正是 v58/v59 自己造出来的假失败。
    //   ★ v63：kind === 'end'（没有符合条件的结果）【算可用】——
    //   它是内容页的合法答复，只是"内容为空且列表到头了"。
    //   如果把它算成不可用，就会去重试、等待、收工 —— 那正是这一版要消灭的行为。
    //   它的"停止翻页"由 crawl 里专门的分支处理（先判 kind，再判可用性）。
    function isUsablePage(res) {
        if (!res || res.status !== 200) return false;
        const html = String(res.html || '');
        if (!html.length) return false;                // 空响应（iframe 被 X-Frame-Options 挡掉时就是这样）
        if (refusalInfo(res).isRefusal) return false;  // 登录/限流提示页
        return true;
    }

    // 通道一：GM_xmlhttpRequest（后台 XHR，快，但 NGA 的 WAF 会成片 503）
    async function gmGet(url) {
        const g = await fetchPage(url);
        return { status: g.status, html: g.responseText || '', headers: g.responseHeaders || '', via: 'GM' };
    }

    // 通道二：隐藏 iframe（真实导航：全套浏览器头 + 完整 Cookie + 浏览器自己解码）
    //   为什么需要它：你另一个脚本（成分分析器）和 2.txt 都用这条路抓回复页，实测可用；
    //   而 GM 通道在 NGA 上会成片 503。这是"GM 被限流时的活路"。
    function fetchPageViaIframe(url, timeoutMs) {
        return new Promise((resolve) => {
            const frame = document.createElement('iframe');
            frame.setAttribute('aria-hidden', 'true');
            frame.setAttribute('referrerpolicy', 'unsafe-url');
            frame.style.cssText = 'position:fixed;width:1px;height:1px;left:-9999px;top:-9999px;border:0;opacity:0;pointer-events:none';
            let done = false, timer = 0;
            const finish = (v) => {
                if (done) return;
                done = true;
                clearTimeout(timer);
                try { frame.onload = null; frame.onerror = null; } catch (e) {}
                try { frame.remove(); } catch (e) {}
                resolve(v);
            };
            timer = setTimeout(() => finish({ status: 0, html: '', via: 'iframe超时' }), timeoutMs || PAGE_IFRAME_TIMEOUT);
            frame.onload = () => {
                try {
                    const doc = frame.contentDocument;
                    if (!doc || !doc.documentElement) return finish({ status: 0, html: '', via: 'iframe无文档' });
                    const html = doc.documentElement.outerHTML || '';
                    const txt = (doc.body && doc.body.textContent) || '';
                    const ri = refusalInfo({ html: html, headers: '' });
                    if (ri.isRefusal) return finish({ status: 503, html: html, via: 'iframe(NGA拒绝页' + (ri.code ? ' ' + ri.code : '') + (ri.msg ? ' ' + ri.msg : '') + ')' });
                    if (html.length < 200) return finish({ status: 200, html: '', via: 'iframe空白文档(疑似被X-Frame-Options挡)' });
                    finish({ status: 200, html: html, via: 'iframe' });
                } catch (e) {
                    finish({ status: 0, html: '', via: 'iframe读不到内容:' + e.message });
                }
            };
            frame.onerror = () => finish({ status: 0, html: '', via: 'iframe onerror' });
            const u = new URL(url, window.location.href);
            u.hash = 'nga-page-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
            frame.src = u.href;
            document.body.appendChild(frame);
        });
    }

    // ★ v59：取页策略已内联进 crawl 循环（见下方 crawl）。
    //   原因："等多久"和"重试几次"必须和"这次是不是被拒绝/断网"绑在一起判断，
    //   单独一个 fetchPageSmart 藏不住"这次到底是结束 / 登录失效 / 限流"这些状态。


    // ================= 通用抓取循环 =================
    // spec = { url, tag, delay, jitter, emptyStop, maxPages, quality, handle }
    async function crawl(spec, btn) {
        const stats = {
            pages: 0, okPages: [], emptyPages: [], placeholderPages: [], failedPages: [], refusedPages: [],
            noContentPages: [],   // ★ v64：既不是占位符、也没解析出内容的页（用来看"为什么 0 条"）
            log: [], totalPages: 0, lastP: 0, endPage: 0, channel: 'GM', switched: false, abortedReason: ''
        };
        const chan = { mode: 'gm', switched: false, lastNote: '' };
        let badPages = 0, emptyStreak = 0, cachedStreak = 0;   // ★ v63：统一成一个"连续失败页数"计数器
        let placeholderStreak = 0;     // ★ v62：连续遇到「帖子已冲水」占位符页的次数（不参与 emptyStreak）
        let iframeUses = 0, iframeDead = false;

        // ★ v59 冷启动缓冲：页面自身的请求（NGA 的统计/广告脚本）先静下来，再打第一枪。
        //   别在第 0 秒就发请求 —— 这也是 v58"一抓就失败"的一半原因。
        if (!stopRequested) await sleep(FIRST_PAGE_DELAY_MS);

        for (let p = 1; p <= MAX_PAGES; p++) {
            if (stopRequested) break;

            // ★ C1：探测到总页数后就按真实页数收口（留 2 页抖动余量）
            const cap = stats.totalPages ? stats.totalPages + 2 : (spec.maxPages || MAX_PAGES);
            if (p > cap) {
                stats.log.push(`已到页数上限（${stats.totalPages ? '探测总页数 ' + stats.totalPages : '上限 ' + spec.maxPages}），停止翻页`);
                break;
            }

            stats.lastP = p;   // ★ v62：记录实际翻到第几页（占位符页也算「翻过」）
            const setStatus = (t) => { btn.textContent = t + '（点我中止）'; };
            setStatus(`${spec.tag} 第 ${p} 页${stats.totalPages ? '/' + stats.totalPages : ''}`);

            // ★★★ v63：取页回到 v54 —— 一页一个请求，什么都不管 ★★★
            //   旧版（v60~v62）把 NGA 的提示页一律当故障：同一页最多试 2 次、失败后等 12~40 秒
            //   重取【同一页】，连续 2 页就"主动收工"。于是你看到
            //   "第 26 页失败…等 26 秒后重取同一页 2/2"，然后收工，再点一次又从第 1 页重来。
            //   而 NGA 在最后一页之后返回的 short-message 页，msginfo 写的是
            //   【没有符合条件的结果】—— 那是在告诉你"这个人没有更多回复了"，是【结束信号】。
            const url = spec.url.replace('{PAGE}', p);

            // ★ 一页只发 1 个请求（v54 就是这样）。
            //   例外：GM 连响应都拿不到（status 0 / 空体）才试一次 iframe；
            //   一旦证实 iframe 能用就【粘住】用它（后续页不再白试 GM），
            //   证实不能用就永久弃用（它常回 200 + 空白文档，别每页白等 25 秒）。
            let res;
            if (chan.mode === 'iframe') {
                res = await fetchPageViaIframe(url, PAGE_IFRAME_TIMEOUT);
                if (!res || res.status !== 200 || !String(res.html || '').length) {
                    chan.mode = 'gm';
                    stats.log.push(`第${p}页: iframe 通道失效，切回 GM`);
                    res = await gmGet(url);
                }
            } else {
                res = await gmGet(url);
            }

            // iframe 只作"GM 连响应都拿不到"时的兜底（不是每次失败都换通道），用满即弃用。
            if (chan.mode !== 'iframe' && (res.status === 0 || !String(res.html || '').length)
                && !iframeDead && iframeUses < IFRAME_MAX_USES) {
                iframeUses++;
                const r2 = await fetchPageViaIframe(url, PAGE_IFRAME_TIMEOUT);
                if (r2 && r2.status === 200 && String(r2.html || '').length) {
                    chan.mode = 'iframe'; chan.switched = true; stats.channel = 'iframe';
                    stats.log.push(`第${p}页: GM 拿不到响应（${describeFetchFail(res)}），改走 iframe 通道取到`);
                    res = r2;
                } else {
                    iframeDead = true;
                    stats.log.push(`第${p}页: iframe 通道也拿不到（${describeFetchFail(r2)}），已弃用该通道`);
                }
            }

            const ri = refusalInfo(res);

            // ① NGA 说「没有符合条件的结果」= 该用户没有更多回复了 → 正常结束
            //    （你手动翻到最后一页之后看到的就是这一页；v54 会解析 0 条继续翻，靠 15 页容错才停）
            if (ri.kind === 'end') {
                stats.endPage = p;
                stats.log.push(`第${p}页: NGA 返回「${ri.msg || '没有符合条件的结果'}」→ ${spec.tag === '抓取主题' ? '该用户的主题列表' : '该用户的回复'}到此为止，正常结束`);
                GM_log(`${spec.tag} 第${p}页: 列表到底（${ri.msg || '没有符合条件的结果'}），结束翻页`);
                break;
            }

            // ② NGA 直接说「帖子发布或回复时间超过限制」= 原帖被冲水 → 安静翻过去（v62 已做对）
            if (ri.kind === 'placeholder') {
                stats.placeholderPages.push(p);
                stats.log.push(`第${p}页: 原帖已被冲水/过期（NGA 提示「${ri.msg}」）— 跳过，继续翻页`);
                await sleep((spec.delay || PAGE_DELAY_MS) + Math.random() * (spec.jitter || PAGE_DELAY_JITTER));
                continue;
            }

            // ③ 真没拿到内容（登录态失效 / 限流 / 超时 / 404）：记一笔，等 8~20s，翻【下一页】。
            //    不重取同一页、不为它收工；连续 MAX_BAD_PAGES(15) 页都这样才停 —— v54 就是这么干的。
            if (!isUsablePage(res)) {
                const note = describeFetchFail(res);
                chan.lastNote = note;
                if (HARD_STOP_STATUS.indexOf(res.status) !== -1) {
                    stats.log.push(`第${p}页: 页面不存在（${note}），停止翻页`);
                    break;
                }
                badPages++;
                stats.failedPages.push(p);
                if (ri.kind === 'login') stats.refusedPages.push(p);
                stats.log.push(`第${p}页: 拿不到内容（${note}）— 记下来，继续下一页`);
                if (ri.kind === 'login' && stats.refusedPages.length === 1) {
                    stats.log.push(`   ↑ NGA 说「${ri.msg || '你必须登录'}」：浏览器里的登录态可能失效了。`
                        + '先在浏览器手工打开这个页面确认能看到正文，再点"开始"（已抓到的不会丢）。');
                }
                if (badPages >= MAX_BAD_PAGES) {
                    stats.abortedReason = `连续 ${MAX_BAD_PAGES} 页拿不到内容（最后一次：${note}）`;
                    stats.log.push(stats.abortedReason + '，停止翻页。已抓到的不会丢，稍后再点"开始"用并集续抓。');
                    break;
                }
                setStatus(`${spec.tag} 第 ${p} 页拿不到内容，跳过继续下一页（已抓 ${postStore.size} 条不会丢）`);
                await sleep(cooldownFor(badPages, res.status));
                continue;
            }

            badPages = 0;   // 一成功就把"连续失败"清零
            if (chan.mode === 'iframe') stats.channel = 'iframe';
            if (chan.switched) stats.switched = true;

            const html = res.html;

            if (!stats.totalPages) {
                const tp = pickTotalPages(html);
                if (tp) { stats.totalPages = tp; stats.log.push(`探测到总页数：${tp} 页（通道：${res.via}）`); }
            }

            // ★★ v62：占位符页在这里【什么都不做】—— 学 v54 ★★
            //   整页只回 [color=silver][b]帖子发布或回复时间超过限制[/b][/color]，
            //   说明这些原帖已被 NGA 冲水/过期，NGA 不再提供正文。这是【正常结果】：
            //     · 不是抓取失败（HTTP 200，页面结构完整，就是没有正文）；
            //     · 也不代表「列表到底了」（后面的页可能还有正常内容）。
            //   v61 在这里多发了一次 iframe 请求（最长白等 25 秒）并打印分析，
            //   于是每一页看起来都像「卡住 30 秒」；v54 从不做这些，它只是安静地解析出 0 条。
            //   跳过逻辑（不计入早停）在下方「早停判定」处统一处理。
            const n = spec.handle(html, p);
            stats.pages++;
            const dg = spec.diagText ? spec.diagText() : '';
            stats.log.push(`第${p}页: 新增 ${n} 条（通道：${res.via}）${dg}`);
            GM_log(`${spec.tag} 第${p}页: 新增 ${n} 条`);

            // ★ v59：把"没新增"再拆成两种，因为它们的含义完全不同 ——
            //   A. 整页连回复块都没有（blocks === 0）→ 真的到底了，可以早停；
            //   B. 有回复块但 pid 全在缓存里（n === 0）→ 只是并集续抓时的正常重叠，不是"到底"。
            //   v54/v58 把 B 也算成"连续无新增"，于是【第二次点开始】走到第 15 页就被
            //   判成"抓完了" —— 这是"手动 35 页、脚本 15 页"的另一半原因。
            const qF = spec.quality ? spec.quality(html) : null;
            const knowTotal = !!stats.totalPages;
            const nearTail = knowTotal && p >= stats.totalPages - 1;

            // ★★ v62：先判断「这一页是不是被 NGA 冲水的占位符页」★★
            //   它是【正常结果】而不是「到底了」，所以绝不能进 emptyStreak（那会让脚本提前收工）。
            //   v54 从不区分它，也从不因此早停 —— 这正是你说「v54 只管一直抓」的原因。
            const isPlaceholderPage = !!(qF && qF.allPlaceholder);

            if (n > 0) {
                emptyStreak = 0; cachedStreak = 0; placeholderStreak = 0;
                stats.okPages.push(p);
            } else if (isPlaceholderPage) {
                // ★ v62：原帖已被冲水 -> 安静翻过去，不等待、不补救、不早停。
                //   已知总页数：一路走到 totalPages 为止（永不因占位符停）。
                //   总页数未知：才用 MAX_PLACEHOLDER_PAGES 兜底，避免无上限空转。
                stats.placeholderPages.push(p);
                placeholderStreak++;
                stats.log.push(`第${p}页: 原帖已被冲水/过期，整页只给占位符（NGA 不提供正文）— 跳过，继续翻页`);
                if (!knowTotal && placeholderStreak >= MAX_PLACEHOLDER_PAGES) {
                    stats.log.push(`连续 ${MAX_PLACEHOLDER_PAGES} 页都是「帖子已冲水」占位符（且未探测到总页数），停止`);
                    break;
                }
            } else {
                placeholderStreak = 0;
                if (!qF) {
                    // 没有质量函数（主题列表）：沿用 v54 的「连续 N 页无新增就停」
                    emptyStreak++;
                    stats.emptyPages.push(p);
                    const stopAt = spec.emptyStop || MAX_EMPTY_PAGES;
                    if (emptyStreak >= stopAt) {
                        stats.log.push(`连续 ${stopAt} 页无新增，视为已到末尾，停止`);
                        break;
                    }
                } else if (qF.blocks === 0) {
                    // A：整页没有回复块（且已排除占位符页）—— 强信号
                    emptyStreak++; cachedStreak = 0;
                    stats.emptyPages.push(p);
                    stats.noContentPages.push(p);
                    const stopAt = nearTail ? 2 : (spec.emptyStop || MAX_EMPTY_PAGES);
                    if (emptyStreak >= stopAt) {
                        stats.log.push(`连续 ${stopAt} 页整页没有回复块，视为已到末尾，停止`);
                        break;
                    }
                } else {
                    // B：有回复块，只是这批 pid 已经抓过（缓存重叠）→ 不算「到底」
                    cachedStreak++; emptyStreak = 0;
                    stats.emptyPages.push(p);
                    stats.noContentPages.push(p);
                    if (!knowTotal && cachedStreak >= MAX_CACHED_PAGES) {
                        stats.log.push(`连续 ${MAX_CACHED_PAGES} 页都是已抓过的内容（且未探测到总页数），停止`);
                        break;
                    }
                    // 探测到总页数时【不因重叠而停】，继续走到 totalPages 为止
                }
            }
            await sleep((spec.delay || PAGE_DELAY_MS) + Math.random() * (spec.jitter || PAGE_DELAY_JITTER));
        }

        // ★ v67：抓取结束【不再复查】（用户 2026-09-14 明确要求）。
        //   v54~v66 收尾时会跑两轮额外请求：
        //     ① 尾部复查（TAIL_RECHECK=6）：把最后 6 个成功页再抓一遍，防分页漂移；
        //     ② 补漏：把主循环里判定失败的页再抓一遍。
        //   代价是抓完后还要多打 6~10+ 个请求、多等十几秒，而且很容易在收尾阶段撞上限流
        //   —— 一限流就会让人以为"整个抓取又失败了"。
        //   用户要的是"抓完就完"，所以两轮都去掉。
        //   没取到的页【不会丢】：结果报告里照旧逐个列出来，再点一次"开始"就是并集续抓
        //   （已抓到的走本地缓存不重复请求，只会去补那几页），等于把"补漏"交给用户按需触发。
        stats.lastNote = chan.lastNote;
        return stats;
    }

    // ================= ★ v66：诊断日志单飞（绝不混进分析用的 txt） =================
    //   NGA_Analysis_*.txt 整篇是要喂给 AI 做人物画像的，诊断区 4000+ 字比正文还长：
    //     ① 挤占上下文 → 真正的回复可能被截断；
    //     ② 里面 ★首块内容="..." 是用户真实发言的碎片 → 同一句会被重复计数；
    //     ③ "帖子发布或回复时间超过限制""你必须登录"大量重复 → 可能被误读成人格线索。
    //   所以诊断改为：写在页面日志里 + 由「导出诊断日志」按钮单独下载。
    let lastDiagText = '';
    let lastDiagFileName = '';

    function downloadTextFile(name, text) {
        const b = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(b);
        a.download = name;
        a.click();
    }

    function exportDiag(btn6) {
        if (!lastDiagText) {
            alert('还没有可导出的诊断。请先点一次「开始抓取」——哪怕一条都没抓到，诊断也会生成。');
            return;
        }
        const old = btn6.textContent;
        btn6.disabled = true;
        try {
            downloadTextFile(lastDiagFileName || 'NGA_CrawlDiag.txt', lastDiagText);
            btn6.textContent = '已导出诊断日志';
        } catch (e) {
            alert('导出失败：' + e.message);
            btn6.textContent = old;
            btn6.disabled = false;
            return;
        }
        setTimeout(() => { btn6.textContent = old; btn6.disabled = false; }, 2000);
    }

    // ================= 主流程 =================
    async function startExport(username, btn, btn2, btn3, btn4) {
        stopRequested = false;

        const cached = loadCache();
        if (cached) GM_log(`已载入本地缓存 ${cached} 条回复，本次将与之取并集`);

        btn.onclick = () => { stopRequested = true; btn.textContent = "中止中，请稍候..."; };
        [btn2, btn3, btn4].forEach(b => { if (b) b.disabled = true; });

        const t0 = postStore.size, p0 = topicStore.size;

        // 0. ★★ v59：资料页【不再】在 t=0 与第 1 页并发发出 ★★
        //   v54 冷启动时只有 1 个在途请求，所以稳；v58 一上来就是"资料页 + 第 1 页"两个并发，
        //   NGA 的 WAF 不看平均间隔、只看瞬时并发 —— 这是"一抓就失败"最直接的来源。
        //   现在资料页挪到两次翻页都结束之后（见下面第 4 步），
        //   全程任何时刻都只有 1 个在途请求。资料页有 12 小时缓存，第二次点"开始"是 0 请求。
        let profileChannel = '未发起';
        let facts = { text: '未抓取到账号资料', rhythm: null, days: 0, posts: NaN };
        if (!/^-?\d+$/.test(uid) || uid === '0') facts.text = '未获取（未在 URL 中找到 authorid）';

        let lastReplyDiag = '';   // ★ v64：上一页"为什么 0 条"的解释，随翻页日志写进诊断
        // 1. ★ 先抓回复：最值钱的数据，把请求配额优先花在它身上
        //    （旧版先抓主题，作者主题列表只有 1~2 页有效，剩下十几页白跑 503，
        //      既慢又把配额烧光，直接导致回复从第 4 页开始成片 503）
        const rstats = await crawl({
            url: `https://${window.location.host}/thread.php?searchpost=1&authorid=${uid}&page={PAGE}`,
            tag: '抓取回复',
            delay: PAGE_DELAY_MS,
            jitter: PAGE_DELAY_JITTER,
            emptyStop: MAX_EMPTY_PAGES,
            quality: replyPageQuality,
            diagText: () => lastReplyDiag,
            handle: (html, page) => {
                // ★ v66：搜索页【彻底不做作者过滤】（= v54 的做法）。
                //   真机证据（用户 18:37 的诊断日志）：第 1 页 18 个块 = 噪声过滤 5 + 作者过滤 13，
                //   第 2 页 19 = 6 + 13，第 3 页 18 = 8 + 10 —— 页面上属于目标用户的正常发言，
                //   被 pickUid 判成了"别人"，一次丢掉 13 条。v64 加的"先丢后捞"虽然把它们救回来了，
                //   但每次抓取都要误报一遍；而一旦救回条件没触发（比如该页内容同时在别处命中缓存），
                //   就真的丢光 —— 这正是"一个回复都没抓到"的来源。
                //   为什么可以直接不过滤：
                //     ① NGA 这个搜索结果页本身已按 authorid 过滤，页面上出现的 postcontent
                //        块本来就是他的回复；
                //     ② "引用里别人的话"在解析正文时已被 stripQuoteBlocks() 剥掉，
                //        不需要再靠 uid 防一遍。
                //   pickUid 仍然会跑（结果写进 p.uid 供导出用），只是【不再用它丢内容】。
                const d = extractPostsDiag(html, null);
                const use = d.posts;
                // 安全阀：只统计、绝不丢弃 —— 万一真混进了别人的楼层，诊断里能看见
                const mismatch = use.filter(p => p.uid && p.uid !== '0' && p.uid !== String(uid)).length;
                const note = mismatch ? ` ⚠其中 ${mismatch} 条的楼层 uid 与目标不一致（未丢弃）` : '';
                let added = 0;
                use.forEach(p => {
                    // ★ v67：记下这条回复出现在【作者回复列表的第几页】，
                    //   导出时写成 【页码】 行，方便自己回 NGA 翻到原帖。
                    if (page) p.page = Number(page) || 0;
                    if (!postStore.has(p.pid)) { postStore.set(p.pid, p); added++; }
                    else {
                        const o = postStore.get(p.pid);
                        if ((!o.title || o.title === '无标题') && p.title) o.title = p.title;
                        if (!o.time && p.time) o.time = p.time;
                        if (!o.uid && p.uid) o.uid = p.uid;
                        if (!o.board && p.board) o.board = p.board;
                        if (!o.subject && p.subject) o.subject = p.subject;
                        if (!o.page && p.page) o.page = p.page;
                    }
                });
                // ★ v64：只在本页【0 条】且不是"整页占位符"时写诊断（占位符页已有专门一行）；
                //   另外"关掉作者过滤取回"这种救回来的情况也必须写出来 —— 否则用户永远不知道过滤误杀过。
                const allPh = d.placeholders > 0 && d.placeholders >= Math.ceil(d.blocks * 0.8);
                lastReplyDiag = ((added === 0 && !allPh) || note)
                    ? ` [块=${d.blocks} 占位=${d.placeholders} 噪声过滤=${d.noiseDropped} 空正文=${d.emptyDropped}${note}]`
                        + (added === 0 ? (d.sample ? ` ★首块内容="${String(d.sample).replace(/\s+/g, ' ').slice(0, 60)}"` : ' ★整页没有 postcontent 块') : '')
                    : '';
                return added;
            }
        }, btn);

        // 2. 再抓主题：作者主题列表通常只有 1~2 页，连续 2 页无新增就停（不再白跑 15 页）
        const tstats = await crawl({
            url: `https://${window.location.host}/thread.php?searchpost=0&authorid=${uid}&page={PAGE}`,
            tag: '抓取主题',
            delay: PAGE_DELAY_MS,
            jitter: PAGE_DELAY_JITTER,
            emptyStop: TOPIC_EMPTY_STOP,
            maxPages: TOPIC_MAX_PAGES,
            quality: null,
            handle: (html) => {
                let added = 0;
                extractTopics(html).forEach(t => {
                    if (isIgnoredContent(t.title)) return;   // 过滤"帖子发布或回复时间超过限制"这类假主题
                    const k = t.title + '|' + (t.url || '');
                    if (!topicStore.has(k)) { topicStore.set(k, t); added++; }
                    else {
                        const o = topicStore.get(k);
                        if (!o.publishedTs && t.publishedTs) { o.publishedTs = t.publishedTs; o.publishedAt = t.publishedAt; o.publishedRaw = t.publishedRaw; }
                        if (!o.forum && t.forum) o.forum = t.forum;
                    }
                });
                return added;
            }
        }, btn);

        // 3. 排序：pid 越大 = 越新
        const replies = Array.from(postStore.values()).sort(
            (a, b) => (parseInt(b.pid, 10) || 0) - (parseInt(a.pid, 10) || 0)
        );
        const topics = Array.from(topicStore.values()).sort(
            (a, b) => (b.publishedTs || 0) - (a.publishedTs || 0)
        );

        // 4. 资料页：两次翻页都彻底结束后才抓（此时主题已齐，发帖节奏一次算准）
        //    放在最后 = 它永远不会和翻页抢配额，也不会抬高瞬时并发。
        let profile = null;
        if (/^-?\d+$/.test(uid) && uid !== '0') {
            btn.textContent = '抓取账号资料页（IP属地 / 注册日期 / 发帖数）…（点我中止）';
            try {
                profile = await fetchProfile(uid);
                profileChannel = (profile && profile._channel) || '未知';
                GM_log('账号资料已就绪（通道：' + profileChannel + '）');
            } catch (e) {
                profileChannel = '异常: ' + e.message;
                GM_log('账号资料抓取失败: ' + e);
                profile = null;
            }
        }
        if (profile) {
            profileChannel = profile._channel || profileChannel;
            facts = buildAccountFacts(profile, topics);
            GM_log('账号资料：\n' + facts.text);
            if (profile._failReason) GM_log('资料页未取到关键字段：' + profile._failReason);
        }
        const displayName = (profile && profile.username) || username;

        const saved = saveCache();

        const fmtPost = (p) => {
            const head = [`【帖子】${p.title}`, `【时间】${formatTime(p.time)}`];
            if (p.board) head.push(`【板块】${p.board}`);
            // ★ v67：标出这条回复在【作者回复列表的第几页】。
            //   老缓存里的条目没有页码（写"未记录"）；用同一个 uid 再抓一次就会自动补上。
            head.push(`【页码】${p.page ? '第 ' + p.page + ' 页' : '未记录'}`);
            if (p.subject) head.push(`【楼层标题】${p.subject}`);
            head.push(`【回复】${p.content}`);
            return head.join('\n');
        };
        const fmtTopic = (t) => {
            let url = t.url || '';
            if (url && !/^https?:\/\//i.test(url)) url = `https://${window.location.host}/${url.replace(/^\//, '')}`;
            const lines = [`【主题】${t.title}`];
            if (t.publishedRaw) lines.push(`【发布时间】${formatTime(t.publishedRaw)}`);
            if (t.forum) lines.push(`【版块】${t.forum}`);
            if (url) lines.push(`【链接】${url}`);
            return lines.join('\n');
        };

        const accountSection = `===== 账号资料（资料页实测数据） =====\n\n${facts.text}\n\n`;
        const topicSection = topics.length ? `===== 用户发布主题 =====\n\n${topics.map(fmtTopic).join("\n\n---\n\n")}\n\n` : '';
        const replySection = replies.length ? `===== 用户回复 =====\n\n${replies.map(fmtPost).join("\n\n---\n\n")}\n\n` : '';

        // 本次结果不好时，直接把原因和下一步写在诊断区最前面
        const warn = [];
        if (!replies.length) warn.push('【本次一条真实回复都没抓到】看下面"回复翻页日志"逐页的 [块=…] 就能分清：①整页占位符（块=20 占位=20）= 原帖已被 NGA 冲水，内容在 NGA 那边已经不存在；②块=0 或首块内容是删帖/锁定类提示 = 原帖已消失；③首块内容是正常发言却算 0 条 = 解析漏了，请把那一行发我。');
        // ★ v63：认出「结束信号」——这是正常结束，不再提示"剩余页请再抓"。
        if (rstats.endPage) warn.push(`NGA 在第 ${rstats.endPage} 页返回「没有符合条件的结果」= 该用户没有更多回复了，这就是列表末尾（共 ${rstats.endPage - 1} 页正文），本次已抓完，不用再点。`);
        if (rstats.abortedReason) warn.push(rstats.abortedReason + '。等 1~2 分钟再点"开始"，已抓到的不会丢，脚本会自动并集续抓。');
        if (rstats.placeholderPages.length) warn.push(`有 ${rstats.placeholderPages.length} 页只显示"帖子发布或回复时间超过限制"（第 ${rstats.placeholderPages.join('、')} 页）—— 这些原帖已被 NGA 冲水/过期，NGA 不再提供正文，属正常现象，不是抓取失败。脚本已按正常页跳过并继续翻页。`);
        if (!replies.length && rstats.noContentPages && rstats.noContentPages.length) {
            warn.push(`第 ${rstats.noContentPages.join('、')} 页 NGA 返回了回复行、但正文块里没有可抓文本 —— 看"回复翻页日志"里这几页的 [块=… 首块内容="…"]：若首块内容是删帖/锁定/空回复这类提示，就是原帖已从 NGA 消失，不是脚本问题；若首块内容是正常发言，把那一行发我。`);
        }
        if (rstats.failedPages.length) warn.push(`以下页本次没取到（按你的要求，抓完不再复查、不重试）：第 ${rstats.failedPages.join('、')} 页。想补齐就【再点一次"开始"】——已抓到的走本地缓存不会重复，只会去补这几页。`);
        if (!rstats.endPage && rstats.totalPages && rstats.lastP && rstats.lastP < rstats.totalPages) {
            warn.push(`探测到共 ${rstats.totalPages} 页，实际只翻到第 ${rstats.lastP} 页（途中被限流或主动收工），剩余页请再点一次补抓。`);
        }
        if (tstats.placeholderPages.length) warn.push(`（主题列表有 ${tstats.placeholderPages.length} 页只回"帖子已冲水"占位符，非失败）`);

        const diag = [
            '',
            '===== [抓取诊断] =====',
            `用户 uid: ${uid}`,
            `本次使用通道: ${rstats.channel}${rstats.switched ? '（中途自动切换过）' : ''}`,
            `本地缓存累计: 主题 ${topics.length} 条 / 回复 ${replies.length} 条（本次新增 主题 ${topics.length - p0} / 回复 ${replies.length - t0}）`,
            `资料页：${profile ? '已读取' : '未读取'}；通道=${profileChannel}${profile && profile._fromCache ? '（命中本地缓存）' : ''}；IP属地=${profile ? (profile.ip || '未获取') : '-'}；注册日期=${profile ? (profile.registeredAt || '未获取') : '-'}；发帖数=${profile ? (profile.postsRaw || '未获取') : '-'}`,
            `资料页用户名（导出用）: ${displayName}`,
            profile && profile._attempts && profile._attempts.length ? '资料页通道日志:\n' + profile._attempts.join('\n') : '',
            profile && profile._errors && profile._errors.length ? '资料页失败记录:\n' + profile._errors.join('\n') : '',
            profile && profile._failReason ? `资料页失败原因: ${profile._failReason}` : '',
            `主题精确发布时间可识别: ${topics.filter(t => t.publishedTs).length}/${topics.length}`,
            `回复：实际翻到第 ${rstats.lastP} 页 / 成功解析 ${rstats.pages} 页（探测总页数 ${rstats.totalPages || '未探测到'}），有新增的页: ${rstats.okPages.length ? rstats.okPages.join('、') : '-'}`,
            `回复：NGA 的结束提示页（没有符合条件的结果）: ${rstats.endPage ? '第 ' + rstats.endPage + ' 页（列表末尾，正常）' : '未出现'}`,
            `回复：本次没取到的页（抓完不复查）: ${rstats.failedPages.length ? rstats.failedPages.join('、') : '无'}`,
            `回复：NGA 说"你必须登录"（登录态失效）的页: ${rstats.refusedPages && rstats.refusedPages.length ? rstats.refusedPages.join('、') : '无'}`,
            `回复：原帖已被冲水/过期、整页只给占位符的页: ${rstats.placeholderPages.length ? rstats.placeholderPages.join('、') : '无'}`,
            `回复：NGA 给了回复列表、但正文块里没有可抓文本的页: ${rstats.noContentPages && rstats.noContentPages.length ? rstats.noContentPages.join('、') : '无'}`,
            `主题：成功抓取 ${tstats.pages} 页（探测总页数 ${tstats.totalPages || '未探测到'}）`,
            `缓存写入: ${saved ? '成功' : '失败'}`,
            warn.length ? '本次提示:\n- ' + warn.join('\n- ') : '',
            '回复翻页日志:',
            rstats.log.join('\n'),
            '',
            '主题翻页日志:',
            tstats.log.join('\n'),
            ''
        ].filter(Boolean).join('\n');

        // ★ v66：导出文件【只放素材】，一行诊断都不放（详见文件里 v66 说明）。
        //   诊断改由「导出诊断日志」按钮单独下载；页面日志里也照旧保留一份。
        lastDiagText = diag;
        lastDiagFileName = `NGA_CrawlDiag_${String(displayName).replace(/[\\/:*?"<>|]/g, '_')}_${uid}.txt`;
        const blob = new Blob([
            PROMPT.replace("{USERNAME}", displayName).replace("{UID}", uid)
                + accountSection + topicSection + replySection + PROMPT_END
        ], { type: "text/plain;charset=utf-8" });

        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `NGA_Analysis_${displayName}_${uid}.txt`;
        a.click();

        btn.textContent = `完成：主题 ${topics.length} / 回复 ${replies.length}（再点是补漏；诊断见「导出诊断日志」）`;
        if (!replies.length) {
            alert('本次一条真实回复都没抓到。原因都写在诊断里 —— 点「导出诊断日志」按钮拿到那份 txt 再看（分析用的 NGA_Analysis 文件里不再包含诊断）。');
        }
        btn.onclick = () => startExport(displayName, btn, btn2, btn3, btn4);
        [btn2, btn3, btn4].forEach(b => { if (b) b.disabled = false; });
    }

    // ================= ★ 调试：资料页实测面板（v56 双通道） =================
    async function dumpProfileFields(btn3, forceFresh) {
        if (!/^-?\d+$/.test(uid) || uid === '0') { alert('未在 URL 中找到 authorid，无法读取资料页。'); return; }
        const old = btn3.textContent;
        btn3.textContent = '读取资料页…';
        btn3.disabled = true;
        try {
            if (forceFresh) {
                try {
                    if (typeof GM_setValue === 'function') GM_setValue(PROFILE_CACHE_KEY, '');
                    localStorage.removeItem(PROFILE_CACHE_KEY);
                } catch (e) {}
            }
            const p = await fetchProfile(uid, { noCache: true });
            const lines = [];
            lines.push(`uid = ${uid}`);
            lines.push(`资料页地址 = https://${window.location.host}/nuke.php?func=ucp&uid=${uid}`);
            lines.push(`成功通道 = ${(p && p._channel) || '未知'}`);
            lines.push(`HTTP = ${p && p._status ? p._status : '未拿到'}；字节数 = ${(p && p._bytes) || 0}；编码判定 = ${(p && p._charset) || '无'}`);
            lines.push(`时间预算 = ${PROFILE_BUDGET_MS / 1000}s（超预算即放弃剩余通道，v57 新增）；单次请求超时 = ${PROFILE_REQ_TIMEOUT / 1000}s`);
            lines.push(`用户名（标题解析） = ${(p && p.username) || '(未解析到)'}`);
            if (p && p._channel) lines.push(`数据来源 = ${p._channel}`);
            if (p && p._session) lines.push(`GM 通道登录态 = ${p._session.loggedIn ? '已登录' : '未登录'}${p._session.uname ? '（' + p._session.uname + '）' : ''}`);
            if (p && p._hiddenByServer && p._hiddenByServer.length) {
                lines.push(`被服务器隐藏的字段 = ${p._hiddenByServer.join('、')}（未登录会话看不到，不是"没有"）`);
            }
            if (p && p._skippedIframe) lines.push(`iframe 通道 = 本次没跑成（${p._skippedIframe}），这份结果不写缓存`);
            if (p && p._shell && p._shell._raw) lines.push(`内嵌 __UCPUSER（前 400 字） = ${p._shell._raw.slice(0, 400)}`);
            lines.push('');
            lines.push(`IP属地   = ${(p && p.ip) || '(空)'}`);
            lines.push(`注册日期 = ${(p && p.registeredAt) || '(空)'}`);
            lines.push(`发帖数   = ${(p && p.postsRaw) || '(空)'}`);
            lines.push('');
            if (p && p._attempts && p._attempts.length) { lines.push('---- 通道日志 ----'); p._attempts.forEach(l => lines.push(l)); lines.push(''); }
            if (p && p._errors && p._errors.length) { lines.push('---- 失败记录 ----'); p._errors.forEach(l => lines.push(l)); lines.push(''); }
            if (p && p._failReason) { lines.push('---- 结论 ----'); lines.push(p._failReason); lines.push(''); }
            lines.push('---- 页面全部 label 字段（键 = 值） ----');
            const all = (p && p._all) || {};
            const keys = Object.keys(all);
            if (!keys.length) {
                lines.push('(一个都没解析到)');
                lines.push('排查顺序：');
                lines.push('① 先在浏览器里手动打开上面那个资料页地址，确认是否要你登录、页面是否正常；');
                lines.push('② 如果手动打开正常而这里全空，把该页面源码发我，我按真实结构改选择器。');
            }
            keys.forEach(k => lines.push(`${k} = ${all[k]}`));

            const box = document.createElement('div');
            box.style.cssText = 'position:fixed;inset:8vh 10vw;z-index:1000000;background:#fff;color:#222;border-radius:12px;padding:16px;box-shadow:0 8px 30px #555;display:flex;flex-direction:column';
            box.innerHTML = '<b style="margin-bottom:8px">资料页实测（v67：内嵌 __UCPUSER 壳解析 → 隐藏 iframe）</b><pre id="nga-dump" style="flex:1;overflow:auto;margin:0;padding:12px;background:#f7f7f5;border:1px solid #ddd;border-radius:6px;font:12px/1.6 Consolas,monospace;white-space:pre-wrap"></pre><div style="text-align:right;margin-top:10px"><button id="nga-dump-again">清缓存并重测</button> <button id="nga-dump-close">关闭</button></div>';
            box.querySelector('#nga-dump').textContent = lines.join('\n');
            box.querySelector('#nga-dump-close').onclick = () => box.remove();
            box.querySelector('#nga-dump-again').onclick = () => { box.remove(); dumpProfileFields(btn3, true); };
            document.body.appendChild(box);
        } catch (e) {
            alert('读取失败：' + e.message);
        } finally {
            btn3.textContent = old;
            btn3.disabled = false;
        }
    }

    // ================= ★ v65 取证：导出【登录态】原始响应（自选页码，绝不丢弃） =================
    // 为什么必须改（v58~v64 这个按钮有个致命缺陷）：
    //   旧写法是 `let html = isUsablePage(g) ? g.html : '';` ——
    //   它把【提示页】直接丢掉了，而提示页恰恰是我最需要拿到的证据。
    //   后果：我从来没看过一张"登录态下的结束页真身"，只能拿匿名抓到的
    //   "你必须登录"页去猜结构，再把那行文字替换掉，合成一张"结束页"当 fixture。
    //
    //   但【登录 / 未登录经常是两个完全不同的界面】，未登录抓到的响应
    //   不能当作登录态页面的证据（这次是用户提醒我的）。
    //   所以这个按钮的职责只有一个：把浏览器【登录态】下真正收到的那一条
    //   响应，一字节不改地交出来 —— 不管它是什么、哪怕它"看起来不像内容页"。
    async function dumpRawPage(btn4) {
        if (!uid) { alert('未在 URL 中找到 authorid（请在 thread.php?searchpost=1&authorid=xxx 页面使用）'); return; }
        const pIn = prompt('要导出第几页的原始响应？（回复页）\n留空 = 第 1 页\n'
            + '想看"列表末尾"就填你手动翻到的最后一个空页，例如 26', '1');
        if (pIn === null) return;                                  // 用户取消
        const page = Math.max(1, parseInt(pIn, 10) || 1);
        const wantReply = confirm('确定 = 【回复】页（searchpost=1）\n取消 = 【主题】页（searchpost=0）');
        const q = wantReply ? 'searchpost=1' : 'searchpost=0';
        const url = `https://${window.location.host}/thread.php?${q}&authorid=${uid}&page=${page}`;
        const old = btn4.textContent;
        btn4.textContent = '抓原始响应…';
        btn4.disabled = true;
        try {
            // 两条通道都试，谁先拿到内容就用谁。
            // ★ 关键：判定"成功"只看"有没有拿到东西"，绝不用 isUsablePage 过滤 ——
            //   提示页（isUsablePage=false）也是证据，而且是唯一有价值的证据。
            let res = await gmGet(url);
            let via = 'GM';
            if (!String(res.html || '').length) {
                const f = await fetchPageViaIframe(url, PAGE_IFRAME_TIMEOUT);
                if (String(f.html || '').length) { res = f; via = 'iframe'; }
            }
            const raw = String(res.html || '');
            if (!raw.length) {
                alert('两条通道都没取到任何内容（GM HTTP ' + res.status + '，iframe 也空）。\n'
                    + '这说明请求根本没回来，不是"页面里没有内容" —— 先确认浏览器已登录 NGA 再重试。');
                GM_log('取证失败：两条通道都没内容，GM HTTP ' + res.status);
                return;
            }
            const ri = refusalInfo(res);
            const lenInfo = probeLenInfo(raw);
            const parsed = probeParse(raw, uid);
            const hdrs = parseResponseHeaders(res.headers);
            const hdrText = Object.keys(hdrs).map(k => k + ': ' + hdrs[k]).join('\n');
            // 元信息包在 HTML 注释里，正文一个字节都不动，方便逐字节对比。
            const meta = '<!-- ==== NGA RAW DUMP META（脚本加的，不属于服务器响应）====\n'
                + '导出时间: ' + new Date().toLocaleString('zh-CN') + '\n'
                + '页面 host: ' + window.location.host + ' / uid: ' + uid + '\n'
                + 'URL: ' + url + '\n'
                + '通道: ' + via + ' / HTTP ' + res.status + (res.ms ? ' / 耗时 ' + res.ms + ' ms' : '') + '\n'
                + '长度: 字符 ' + lenInfo.chars + '（ASCII ' + lenInfo.ascii + ' + 非ASCII ' + lenInfo.nonAscii
                + '）≈ GBK ' + lenInfo.gbkBytes + ' 字节\n'
                + 'X-NGA-CONTENT-TYPE: ' + (hdrs['x-nga-content-type'] || '(无)') + '\n'
                + '脚本判定 kind: ' + (ri.kind || '(不是提示页)') + '\n'
                + '脚本读到的 msgcode: ' + (ri.code || '(无)') + ' / msginfo: ' + (ri.msg || '(无)') + '\n'
                + 'isUsablePage: ' + isUsablePage(res) + '（false 也照存 —— 提示页就是证据）\n'
                + '解析条数: 回复 ' + parsed.posts + ' / 主题 ' + parsed.topics + ' / 探测总页数 ' + parsed.totalPages + '\n'
                + '完整响应头:\n' + (hdrText || '(无)') + '\n'
                + '==== END META ==== -->\n';
            const blob = new Blob([meta + raw], { type: 'text/html;charset=utf-8' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `NGA_raw_${uid}_${wantReply ? 'reply' : 'topic'}_p${page}_${ri.kind || 'ok'}.html`;
            a.click();
            GM_log('原始响应已导出（通道 ' + via + '，HTTP ' + res.status + '，kind=' + (ri.kind || 'ok')
                + '，字符 ' + lenInfo.chars + '）→ ' + a.download);
            if (ri.kind) {
                GM_log('★ 这是一张【提示页】（kind=' + ri.kind + '，msg="' + ri.msg + '"）。'
                    + '它恰恰是最有价值的证据 —— 请把整个文件发我，我要用它替换掉现在那张"合成"的 fixture。');
            }
        } catch (e) {
            alert('导出失败：' + e.message);
        } finally {
            btn4.textContent = old;
            btn4.disabled = false;
        }
    }

    // ================= ★ v61 探针 v2 的纯函数（放顶层，便于离线自检） =================
    // 设计原则：这里【只】做"把响应描述清楚"，不下任何结论。
    // 结论留给 probeOnce 汇总，因为结论依赖两条通道的横向对比。
    function probeLenInfo(html) {
        const s = String(html || '');
        let nonAscii = 0;
        for (let i = 0; i < s.length; i++) { if (s.charCodeAt(i) > 127) nonAscii++; }
        const ascii = s.length - nonAscii;
        return {
            chars: s.length,
            ascii: ascii,
            nonAscii: nonAscii,
            gbkBytes: ascii + nonAscii * 2,          // GBK 下非 ASCII 基本 2 字节，估算够用
            endsHtml: /<\/html>\s*$/i.test(s),
            hasBodyClose: /<\/body>/i.test(s),
            tail: s.slice(-140).replace(/\s+/g, ' ').trim()
        };
    }

    function probeAnchors(html) {
        const s = String(html || '');
        const c = (re) => (s.match(re) || []).length;
        return {
            posts: c(/id=['"]postcontent\d+_\d+['"]/g),
            topics: c(/class=['"][^'"]*\btopic\b[^'"]*['"]/g),
            subjects: c(/id=['"]postsubject/gi),
            quotes: c(/class=['"][^'"]*\bquote\b[^'"]*['"]/gi),
            placeholders: c(/帖子发布或回复时间超过限制/g)
        };
    }

    // ★ 唯一有意义的数字：脚本自己的解析器能从这段 HTML 里抠出几条
    function probeParse(html, wantUid) {
        const r = { posts: -1, topics: -1, totalPages: -1, firstPost: '' };
        try { const a = extractPosts(html, wantUid); r.posts = a.length; if (a[0]) r.firstPost = a[0].pid + ' / ' + String(a[0].content || '').slice(0, 40); }
        catch (e) { r.posts = -2; }
        try { r.topics = extractTopics(html).length; } catch (e) { r.topics = -2; }
        try { r.totalPages = pickTotalPages(html); } catch (e) { r.totalPages = -2; }
        return r;
    }

    function probeTitleOf(html) {
        const m = String(html || '').match(/<title[^>]*>([\s\S]{0,120}?)<\/title>/i);
        return m ? m[1].replace(/\s+/g, ' ').trim() : '';
    }

    // 两段正文的公共前缀长度。若"短的是长的严格前缀"，就说明短的那次响应被截断了。
    function probeCommonPrefix(a, b) {
        const n = Math.min(a.length, b.length);
        let i = 0;
        while (i < n && a.charCodeAt(i) === b.charCodeAt(i)) i++;
        return i;
    }

    // 把一次响应写成多行报告（纯描述，不判定）
    function probeDescribe(html, res) {
        const L = probeLenInfo(html), A = probeAnchors(html), P = probeParse(html, uid);
        const out = [];
        if (res) out.push('HTTP ' + res.status + ' / via=' + res.via + (res.ms ? ' / 耗时 ' + res.ms + ' ms' : ''));
        out.push('长度: 字符 ' + L.chars + '（ASCII ' + L.ascii + ' + 非ASCII ' + L.nonAscii + '）≈ GBK ' + L.gbkBytes + ' 字节');
        out.push('页面 title: "' + probeTitleOf(html) + '"');
        out.push('结构锚点: postcontent 块=' + A.posts + ' / class="topic"=' + A.topics + ' / postsubject=' + A.subjects + ' / 引用块=' + A.quotes + ' / 占位符=' + A.placeholders);
        out.push('★ 解析结果: 回复 ' + (P.posts < 0 ? '★解析抛异常' : P.posts + ' 条')
            + ' / 主题 ' + (P.topics < 0 ? '★解析抛异常' : P.topics + ' 条')
            + ' / 探测总页数 ' + (P.totalPages < 0 ? '★解析抛异常' : P.totalPages));
        if (P.firstPost) out.push('  第一条: ' + P.firstPost);
        out.push('完整性: 以 </html> 收尾 = ' + (L.endsHtml ? '是' : '★ 否') + ' / 含 </body> = ' + (L.hasBodyClose ? '是' : '否'));
        out.push('  末尾 140 字: ' + L.tail);
        return { lines: out, len: L, anchors: A, parse: P };
    }

    // ================= UI =================
    if (uid) {
        const btn = document.createElement("button");
        btn.className = "nga-btn";
        btn.textContent = "开始抓取（资料+主题+回复，自动取并集）";

        const btn2 = document.createElement("button");
        btn2.className = "nga-btn alt";
        btn2.textContent = "清空本地缓存";

        const btn3 = document.createElement("button");
        btn3.className = "nga-btn alt2";
        btn3.textContent = "调试：资料页实测（IP属地/注册/发帖）";

        const btn4 = document.createElement("button");
        btn4.className = "nga-btn alt3";
        btn4.textContent = "取证：导出登录态原始响应（自选页码）";

        // ★ v66：诊断日志独立导出。分析用的 NGA_Analysis_*.txt 里不再夹带任何诊断。
        const btn6 = document.createElement("button");
        btn6.className = "nga-btn alt5";
        btn6.textContent = "导出诊断日志（不混进分析文件）";

    // ================= ★ v61 探针 v2：两通道对账 =================
    // 为什么要有 v2：v60 的探针只报"长度"，而长度【说明不了任何事】——
    //   正常内容页的最后几页可能只有几 KB，NGA 的拒绝页反而挺大。
    //   真正要回答的是两件事：
    //     ① 这次拿到的东西，脚本能解析出几条？   ← 只有这个数字有意义
    //     ② 两条通道拿到的是不是同一个页面？     ← 用 title + 条数 + 前缀关系对账
    //   顺带修正：v60 把 String.length 标成"字节"（中文在 GBK 下 2 字节，差约 2 倍）。
    async function probeOnce(btn5) {
        const old = btn5.textContent;
        btn5.disabled = true;
        btn5.textContent = '探针运行中…（3 个请求，约 6 秒）';
        const lines = [];
        const url = `https://${window.location.host}/thread.php?searchpost=1&authorid=${uid}&page=1`;
        lines.push('=== NGA 取页探针 v2（v61）===');
        lines.push('时间: ' + new Date().toLocaleString('zh-CN'));
        lines.push('页面 host: ' + window.location.host + ' / 目标 uid: ' + uid);
        lines.push('目标 URL: ' + url);
        lines.push('可见 cookie: ' + (document.cookie ? document.cookie.replace(/[^;=]{0,40}=[^;]*/g, function (kv) { return kv.split('=')[0] + '=<略>'; }).slice(0, 400) : '(空)'));
        lines.push('（HttpOnly 票据本来就读不到，属正常）');
        lines.push('');

        let gmHtml1 = '', gmHtml2 = '', gmStatus1 = '';
        let ifrHtml = '', ifrStatus = '', ifrUsable = null;

        // ---- 【1/3】GM 第 1 次：脚本实际用的通道 ----
        lines.push('【1/3】GM 通道（脚本主通道）');
        try {
            const t0 = Date.now();
            const r = await gmGet(url);
            r.ms = Date.now() - t0;
            gmHtml1 = String(r.html || ''); gmStatus1 = r.status;
            const hdrs = parseResponseHeaders(r.headers);
            const ri = refusalInfo(r);
            lines.push('X-NGA-CONTENT-TYPE = ' + (hdrs['x-nga-content-type'] || '(无)'));
            lines.push('判定: ' + (ri.isRefusal ? '★ NGA 拒绝页' : '看起来不是拒绝页')
                + (ri.code ? ' / 错误码 ' + ri.code : '')
                + (ri.msg ? ' / 说明 "' + ri.msg + '"' : '')
                + (ri.viaHeader ? ' / 依据=响应头 short-message' : ''));
            lines.push('isUsablePage = ' + isUsablePage(r));
            probeDescribe(r.html, r).lines.forEach(function (l) { lines.push(l); });
            const hk = Object.keys(hdrs);
            lines.push('响应头: ' + (hk.length ? '' : '(拿不到)'));
            hk.forEach(function (k) { lines.push('  ' + k + ': ' + hdrs[k]); });
        } catch (e) { lines.push('GM 异常: ' + e.message); }
        lines.push('');

        await sleep(1600);

        // ---- 【2/3】GM 第 2 次：同 URL，验长度稳定性 ----
        //   CDN 缓存截断 / gzip-chunked 半包 都会在这里现形（两次长度不一致）
        lines.push('【2/3】GM 第 2 次（同 URL，验长度稳定性）');
        try {
            const t0 = Date.now();
            const r = await gmGet(url);
            const ms = Date.now() - t0;
            gmHtml2 = String(r.html || '');
            const sameLen = (gmHtml1.length === gmHtml2.length);
            const sameBody = (gmHtml1 === gmHtml2);
            lines.push('耗时 ' + ms + ' ms / HTTP ' + r.status + ' / 字符 ' + gmHtml2.length
                + ' / 与第 1 次长度一致 = ' + (sameLen ? '是' : '★ 否（第1次 ' + gmHtml1.length + '）')
                + ' / 内容逐字一致 = ' + (sameBody ? '是' : '否'));
        } catch (e) { lines.push('GM 第 2 次异常: ' + e.message); }
        lines.push('');

        await sleep(1600);

        // ---- 【3/3】iframe 通道：同 URL 作对照 ----
        lines.push('【3/3】iframe 通道（真实导航，作对照）');
        try {
            const f = await fetchPageViaIframe(url, 15000);
            ifrHtml = String(f.html || ''); ifrStatus = f.status;
            ifrUsable = isUsablePage(f);
            lines.push('isUsablePage = ' + ifrUsable);
            probeDescribe(f.html, f).lines.forEach(function (l) { lines.push(l); });
        } catch (e) { lines.push('iframe 异常: ' + e.message); }
        lines.push('');

        // ---- 对账 + 结论 ----
        lines.push('=== 两条通道对账 ===');
        if (gmHtml1 && ifrHtml) {
            const cp = probeCommonPrefix(gmHtml1, ifrHtml);
            const gmIsPrefix = (cp === gmHtml1.length && gmHtml1.length < ifrHtml.length);
            const p1 = probeParse(gmHtml1, uid), p2 = probeParse(ifrHtml, uid);
            lines.push('长度比（GM / iframe）= ' + (ifrHtml.length ? (gmHtml1.length / ifrHtml.length).toFixed(2) : '?'));
            lines.push('共同前缀 = ' + cp + ' 字符');
            lines.push('GM 正文是否为 iframe 正文的严格前缀 = ' + (gmIsPrefix ? '★ 是（GM 少了尾巴 → 响应被截断）' : '否'));
            lines.push('解析条数: GM 回复 ' + p1.posts + ' / iframe 回复 ' + p2.posts
                + ' ；总页数 GM ' + p1.totalPages + ' / iframe ' + p2.totalPages);
            lines.push('');
            lines.push('【结论】');
            if (p1.posts < 0 || p2.posts < 0) {
                lines.push('★ 解析器抛异常了 —— 这不是网络问题，是解析代码要修。请把这段整块发我。');
            } else if (p1.posts === p2.posts && p1.posts > 0) {
                lines.push('两通道解析条数一致（各 ' + p1.posts + ' 条），长度差异只是"原始 HTML vs 渲染后 DOM"的正常差别。');
                lines.push('→ 【抓取链路是好的】直接点「开始抓取」即可。中途若失败，再点一次探针并把这段发我。');
            } else if (p1.posts === 0 && p2.posts > 0) {
                lines.push('★★ GM 解析出 0 条，而 iframe 解析出 ' + p2.posts + ' 条 —— GM 拿到的是"空壳页"。');
                lines.push('→ 这就是"抓到一半就停 / 只抓 N 页"的直接原因。请把这段发我，我会让脚本在 page1 解析为 0 时自动改走 iframe。');
            } else if (gmIsPrefix) {
                lines.push('★★ GM 正文是 iframe 正文的严格前缀 —— GM 响应被截断了（CDN / gzip / chunked 半包都可能）。');
                lines.push('→ 请把这段发我，我加"完整性校验 + 自动重取"。');
            } else if (p1.posts > p2.posts) {
                lines.push('GM 解析条数比 iframe 还多（' + p1.posts + ' vs ' + p2.posts + '），说明 iframe 侧读到的 DOM 不完整。');
                lines.push('→ iframe 通道不可信，请把这段发我。');
            } else {
                lines.push('GM 解析 ' + p1.posts + ' 条 / iframe 解析 ' + p2.posts + ' 条，既不一致也不是前缀关系。');
                lines.push('→ 请把这段整块发我，我按这个比例判断是哪一侧少了内容。');
            }
            if (p1.totalPages > 0) {
                lines.push('（附带：GM 探测到的总页数是 ' + p1.totalPages + ' —— 如果它和你手动翻出来的页数一致，说明第 1 页本身完全正常。）');
            } else {
                lines.push('（附带：GM 在第 1 页探测不到"共 N 页"字样 → 这一页可能不是搜索结果页，请特别注意。）');
            }
        } else {
            lines.push('有一侧没拿到内容，无法对账：'
                + 'GM = ' + (gmStatus1 || '未执行') + ' (' + gmHtml1.length + ' 字符)'
                + ' / iframe = ' + (ifrStatus || '未执行') + ' (' + ifrHtml.length + ' 字符)');
            lines.push('→ 两条通道都没内容 = 登录态或 IP 层面被挡。先手工在浏览器打开目标 URL 确认能看到回复列表。');
        }

        const txt = lines.join('\n');
        const box = document.createElement('div');
        box.style.cssText = 'position:fixed;inset:6vh 8vw;z-index:1000001;background:#fff;color:#222;border-radius:12px;padding:16px;box-shadow:0 8px 30px #555;display:flex;flex-direction:column';
        box.innerHTML = '<b style="margin-bottom:8px">NGA 取页探针 v2（请把这段整块复制发我）</b>'
            + '<pre id="nga-probe" style="flex:1;overflow:auto;margin:0;padding:12px;background:#f7f7f5;border:1px solid #ddd;border-radius:6px;font:12px/1.6 Consolas,monospace;white-space:pre-wrap"></pre>'
            + '<div style="text-align:right;margin-top:10px"><button id="nga-probe-copy">复制全部</button> <button id="nga-probe-close">关闭</button></div>';
        box.querySelector('#nga-probe').textContent = txt;
        box.querySelector('#nga-probe-copy').onclick = function () {
            try {
                const ta = document.createElement('textarea');
                ta.value = txt;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                ta.remove();
                this.textContent = '已复制';
            } catch (e) { alert('复制失败，请手动选中 pre 里的文字复制'); }
        };
        box.querySelector('#nga-probe-close').onclick = function () { box.remove(); };
        document.body.appendChild(box);
        GM_log(txt);
        btn5.textContent = old;
        btn5.disabled = false;
    }

        btn.onclick = () => startExport("TargetUser", btn, btn2, btn3, btn4);

        btn2.onclick = () => {
            if (!confirm('确定清空本机保存的抓取缓存和资料页缓存？下次抓取将从头开始（不影响已导出的 txt）。')) return;
            try {
                if (typeof GM_setValue === 'function') { GM_setValue(CACHE_KEY, ''); GM_setValue(PROFILE_CACHE_KEY, ''); }
                localStorage.removeItem(CACHE_KEY);
                localStorage.removeItem(PROFILE_CACHE_KEY);
            } catch (e) {}
            postStore.clear(); topicStore.clear();
            btn2.textContent = "缓存已清空";
            setTimeout(() => { btn2.textContent = "清空本地缓存"; }, 2000);
        };

        btn3.onclick = () => dumpProfileFields(btn3);
        btn4.onclick = () => dumpRawPage(btn4);
        btn6.onclick = () => exportDiag(btn6);

        const btn5 = document.createElement("button");
        btn5.className = "nga-btn alt4";
        btn5.textContent = "探针v2：对账两通道（解析条数/完整性）";
        btn5.onclick = () => probeOnce(btn5);

        document.body.appendChild(btn);
        document.body.appendChild(btn2);
        document.body.appendChild(btn3);
        document.body.appendChild(btn4);
        document.body.appendChild(btn6);
        document.body.appendChild(btn5);
    }
})();
