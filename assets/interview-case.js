/* 独立的面试案例内容；主程序负责 #case 视图切换。 */
(() => {
  const mount = () => {
    const view = document.getElementById('view-case');
    if (!view || view.dataset.caseMounted) return;
    view.dataset.caseMounted = 'true';
    view.classList.add('interview-case-view');
    view.innerHTML = `
      <div class="interview-case-scroll">
        <article class="interview-case">
          <div class="case-topline"><a class="case-back" href="#product">← 返回产品案例</a><span>CASE STUDY / 01</span></div>
          <header class="case-hero">
            <div class="case-hero-copy">
              <p class="case-kicker"><span></span> AI MUSIC · CREATIVE WORKFLOW</p>
              <h1>Osmanthus <em>音乐 MV 创作平台</em></h1>
              <p class="case-lead">从高校音乐创作需求出发，探索让 AI 走进创作、编辑与教学的工作流。</p>
              <div class="case-tags"><span>AI 产品经理</span><span>2023.09 — 2026.09</span><span>音智 AI 工作室</span></div>
              <div class="case-launch"><a href="http://127.0.0.1:8792/index.html" target="_blank" rel="noopener noreferrer">打开音乐 MV 平台 ↗</a><span>本机演示 · 请先启动 MV 工作台</span></div>
            </div>
            <aside class="case-brief"><span class="case-brief-label">PROJECT SNAPSHOT</span><div><small>服务场景</small><strong>课堂作业 / 练习创作 / 教学示范</strong></div><div><small>我的角色</small><strong>8 人团队中的唯一产品岗</strong></div><div><small>产品形态</small><strong>合作高校内部限定部署</strong></div></aside>
          </header>

          <section class="case-status" aria-label="项目展示范围"><span class="case-status-icon">i</span><p><strong>关于展示范围</strong> 高校版本为内部限定部署，非公网开放；GitHub 保留可复现原型。音乐 MV 的代码动画与付费视频 API 双路线为小范围验证。</p></section>

          <section class="case-section case-intro"><div class="case-section-heading"><span>01 / CONTEXT</span><h2>先理解创作中的阻力</h2></div><div class="case-text"><p>音乐专业师生需要完成课堂作业、练习和教学示范，但传统创作流程涉及剪辑、混音与音效处理，多工具切换和学习成本可能阻碍创意表达。</p><p>我通过师生访谈、课堂观察和教学走查梳理需求，区分新手学生、进阶创作者与专业教师，围绕不会写提示词、结果难控制和满意版本难复现等问题规划产品。</p></div></section>

          <section class="case-section"><div class="case-section-heading"><span>02 / MY ROLE</span><h2>从需求到版本推进</h2><p>作为团队中的产品岗，将场景、模型能力与团队交付连接起来。</p></div><div class="case-grid case-grid-three"><div class="case-tile"><b>01</b><h3>需求与路线</h3><p>建立用户画像和需求池，排序优先级；围绕生成、剪辑、混音、音效与视频能力规划版本。</p></div><div class="case-tile"><b>02</b><h3>模型与工作流</h3><p>对比模型能力、授权和成本，设计从表达创意、选择曲风、生成试听到调整导出的流程。</p></div><div class="case-tile"><b>03</b><h3>评测与协作</h3><p>协调开发、算法与 UI，结合客观指标和主观听感收集问题，推动迭代与复测。</p></div></div></section>

          <section class="case-section"><div class="case-section-heading"><span>03 / PRODUCT THINKING</span><h2>把不稳定的生成变成可迭代的流程</h2></div><div class="case-flow"><div><span>01</span><strong>模型选型</strong><p>按音质、音准、风格、中文咬字、授权、成本等维度对比。</p></div><i>→</i><div><span>02</span><strong>约束与资产</strong><p>沉淀曲风模板、输出协议与项目资产，并优化检索策略。</p></div><i>→</i><div><span>03</span><strong>试听与调整</strong><p>设计试听、单段重生成和版本对比，支持持续修改。</p></div><i>→</i><div><span>04</span><strong>反馈复测</strong><p>收集并归因 Badcase，将结果回流到模型、模板与功能。</p></div></div></section>

          <section class="case-section case-highlight"><div class="case-section-heading"><span>04 / QUALITY LOOP</span><h2>面对结果不稳定，先建立评测闭环</h2></div><div class="case-highlight-body"><p>针对中文咬字不稳、风格不可控等问题，建立客观指标与主观听感结合的评测方式；按周收集、分类、排序，推动模型和 Prompt 调整，再通过复测观察变化。</p><div class="case-loop"><span>收集问题</span><b>→</b><span>分类归因</span><b>→</b><span>调整方案</span><b>→</b><span>复测回看</span></div></div></section>

          <section class="case-section"><div class="case-section-heading"><span>05 / OUTCOMES</span><h2>成果与项目积累</h2><p>项目记录 · 基于阶段性评测与反馈</p></div><div class="case-metrics"><div><strong>12 <small>个版本</small></strong><span>参与迭代推进</span></div><div><strong>3 <small>所高校</small></strong><span>累计服务超 1000 人次</span></div><div><strong>420<small> 余条</small></strong><span>沉淀 Badcase</span></div><div><strong>38% → 76%</strong><span>音乐生成合格率</span></div></div><p class="case-note">资产库知识召回准确率由 65% 提升至 88%。</p></section>

          <footer class="case-footer"><div><span>CONTINUE EXPLORING</span><h2>回到作品集，继续了解其他项目。</h2></div><div class="case-footer-links"><a href="#product">返回产品案例 →</a><a href="https://github.com/oniszczukthommy-wq/ai-music-workbench-showcase" target="_blank" rel="noopener noreferrer">公开项目介绍 ↗</a></div></footer>
        </article>
      </div>`;
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();
