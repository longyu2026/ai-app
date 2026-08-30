# AGENTS.md - 抖店数据工作台（三合一）v32

## 项目概览
抖店数据工作台是一个纯前端单页应用（SPA），集成数据监控、成交分析复盘、直播复盘分析三大模块。核心功能包括千川大盘数据OCR识别、文本粘贴解析、五维四率漏斗分析、直播诊断报告生成。

## 技术栈
- **纯静态HTML**：单文件 ~600KB，含内联CSS/JS
- **外部库**（`public/lib/`）：Tesseract.js（OCR）、PaddleOCR（增强OCR）、ECharts（图表）、Dexie（IndexedDB）、XLSX（Excel解析）、html2pdf（PDF导出）、docx/mammoth（Word解析）、OpenCV.js（图像处理）
- **部署**：Python http.server 静态托管

## 核心功能模块

### 1. 数据监控台（Monitor）
- 订单销售/流量访客/商品库存/售后退款 四大看板
- GMV趋势图、访客趋势图、商品排行图、退款率趋势图
- 批量导入Excel/CSV数据

### 2. 成交分析复盘（Review）
- 上传抖店「成交分析」Excel文件
- 9大板块：核心指标、GMV趋势、流量趋势、漏斗对比、投放效率、退款监控、载体账号、商品人群、复盘结论

### 3. 直播复盘分析（Live）- 核心模块
- **三级识别体系**：
  - 一级：全图OCR（Tesseract/PaddleOCR）
  - 二级：区块分割OCR（4区域分别识别）
  - 三级：文字粘贴兜底（`lrTier3TextArea`）
- **千川大盘数据**：39字段自动解析（`LR_DAPAN_FIELDS`）
- **五维四率漏斗**：曝光→观看→商品曝光→商品点击→成交
- **诊断报告**：数据驱动的健康度评分与建议

## 关键文件
- `public/index.html`：主应用文件（v32全功能优化版）
- `public/lib/`：外部依赖库
- `.coze`：项目配置（dev/deploy命令）

## 核心函数
- `lrExtractMetrics(text)`：从OCR/粘贴文本提取25+指标
- `lrDaPanDoParse(text)`：解析千川大盘39字段
- `lrParseOCRText(text, metrics)`：渲染指标卡+漏斗+报告
- `lrBuildFunnelRates(metrics, dapan)`：五维四率计算
- `v32ParseTier3Text()`：三级保底文字解析（v32新增）
- `v32NormalizeText(text)`：文本归一化（v32新增）

## 构建和测试
```bash
# 启动开发服务器
cd public && python -m http.server 5000 --bind 0.0.0.0

# 验证页面
curl http://localhost:5000/index.html

# 验证lib文件
curl http://localhost:5000/lib/tesseract.min.js
```

## 数据流
1. 用户上传图片 → OCR识别（Tesseract/PaddleOCR）→ `lrExtractMetrics` → `lrParseOCRText`
2. 用户粘贴文本 → `v32NormalizeText` → `lrExtractMetrics` + `lrDaPanDoParse` → `lrParseOCRText`
3. 千川API直连 → 实时拉取数据 → 渲染报告

## 注意事项
- 所有lib路径使用 `/lib/` 绝对路径（相对于public目录）
- OCR引擎支持切换：PaddleOCR（推荐）/ Tesseract（备用）
- 暗色截图自动反色预处理（`lrPreprocessImage`）
- 文本归一化处理全角字符、OCR错字、中文空格等问题
