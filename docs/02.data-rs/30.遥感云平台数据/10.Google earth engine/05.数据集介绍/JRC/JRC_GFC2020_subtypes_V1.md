---
title: "欧盟 JRC 2020 年全球森林类型图 V1"
date: 2026-11-03 12:00:00
permalink: /pages/3fb6432f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eudr"
  - "forest"
  - "forest-biomass"
  - "jrc"
  - "landcover"
  - "primary-forest"
---

# 欧盟 JRC 2020 年全球森林类型图 V1

英文原名：EC JRC global map of forest types 2020, V1

## 这是什么数据

全球森林类型图以 10 米空间分辨率，空间明确地表示了 2020 年的原始林、天然更新林与人工林（包括人工种植林）。绘制这些森林类型的基线图层是 2020 年全球森林覆盖图（JRC GFC 2020）第 3 版的森林覆盖范围。森林类型的定义遵循欧盟"关于在欧盟市场供应以及从欧盟出口与毁林和森林退化相关的某些商品和产品"条例（EUDR，Regulation (EU) 2023/1115）的定义，其与 FAO 全球森林资源评估的特征与特定森林类别相似。2020 年对应 EUDR 的截止日期。

在 EUDR 背景下，全球森林类型图可作为非强制性、非排他性、不具法律约束力的信息来源使用，尤其是在经营者与贸易商的风险评估阶段。关于该图及其使用的更多信息，见欧盟毁林与森林退化观测站。EUDR 下森林退化的定义意味着：对 2020 年只需评估原始林与天然更新林的存在；所有其他森林（包括人工种植林）均划入"人工林"类别。"其他林地"类别只存在于 2020 年全球森林覆盖图的森林覆盖范围之外，因此未在 GFT 2020 中绘制。

全球森林类型图 v1 合并了现有的、指示或代理四大主要森林类型的全球数据集（全覆盖或全球范围）。用于在 GFT 2020 中划定原始林的主要数据图层有：

1. 2019 年森林景观完整性指数；2. 2020 年未受干扰热带红树林图以及 1990–2020 年热带湿润森林的退化与毁林（来自 JRC-TMF）；3. 截至 2020 年底的毁林警报（RADD）；4. 2020 年完整森林景观图；5. 世界保护区数据库；6. Sabatini 等（2021）的欧洲原始林数据集；7. 2001–2020 年全球树木覆盖损失结合全球森林损失驱动因素图；8. 全球采矿土地利用图。

绘制人工林（包括人工种植林）的主要图层有：

1. WRI 人工种植树木空间数据库（第 3 版）；2. IIASA 人工/人工种植林森林经营类别；3. 2019 年全球森林冠层高度数据集；4. 2000 年全球树木覆盖与 2001–2020 年损失；5. 全球森林损失驱动因素；6. 2020 年全球天然林。

GFT 2020 第 1 版的全球输入图层与制图方法见一份单独的技术报告，预计 2026 年 3 月发布，可从 JRC Publications Repository 获取：[Bourgoin et al. 2026](https://publications.jrc.ec.europa.eu/repository/handle/JRC146622)。一份技术报告 [Bourgoin et al. 2025](https://op.europa.eu/en/publication-detail/-/publication/e2c286ac-14e9-11f0-b1a3-01aa75ed71a1/language-en) 描述了 GFT 2020 初步版本（第 0 版）的制图方法。

已知问题清单请参阅[本网站](https://forobs.jrc.ec.europa.eu/GFT)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：2020 年；分辨率：10 米。
- 时间范围：2020-01-01 至 2020-12-31

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Map | 2020 年全球森林类型。 | 10 |  |

## 能拿来做什么

- 森林类型与原始林识别
- EUDR 森林退化风险评估
- 森林保护规划

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('JRC/GFC2020_subtypes/V1');
```

- 数据集编号（Earth Engine ID）：`JRC/GFC2020_subtypes/V1`
- 提供方：Joint Research Centre, European Commission、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GFC2020_subtypes_V1

## 许可与引用

- 许可：proprietary
- 关键词：eudr, forest, forest-biomass, jrc, landcover, primary-forest
- 数据引用：Bourgoin, Clement; Ameztoy, Iban; Verhegghen, Astrid; Carboni, Silvia; 
Achard, Frederic; Colditz, Rene (2026): Global map
of forest types 2020 - version 1. European Commission, Joint Research Centre
(JRC) [Dataset] PID:
[http://data.europa.eu/89h/45182662-3015-4a25-8d1e-aa857d75235d](http://data.europa.eu/89h/45182662-3015-4a25-8d1e-aa857d75235d).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Global map of forest types 2020 V0 [deprecated]](/pages/af23bf12/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
