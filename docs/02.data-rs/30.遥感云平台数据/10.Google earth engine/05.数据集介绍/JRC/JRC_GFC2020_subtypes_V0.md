---
title: "2020 年全球森林类型图 V0（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/af23bf12/
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

# 2020 年全球森林类型图 V0（已弃用）

英文原名：Global map of forest types 2020 V0 [deprecated]

## 这是什么数据

全球森林类型图以 10 米空间分辨率，空间明确地表示了 2020 年的原始林、天然更新林与人工林（包括人工种植林）。绘制这些森林类型的基线图层是 2020 年全球森林覆盖图（JRC GFC 2020）第 1 版的森林覆盖范围。森林类型的定义遵循欧盟"关于在欧盟市场供应以及从欧盟出口与毁林和森林退化相关的某些商品和产品"条例（EUDR，Regulation (EU) 2023/1115）的定义，其与 FAO 全球森林资源评估的特征与特定森林类别相似。2020 年对应 EUDR 的截止日期。

在 EUDR 背景下，全球森林类型图可作为非强制性、非排他性、不具法律约束力的信息来源使用，尤其是在经营者与贸易商的风险评估阶段。关于该图及其使用的更多信息，见欧盟毁林与森林退化观测站。EUDR 下森林退化的定义意味着：对 2020 年只需评估原始林与天然更新林的存在；所有其他森林（包括人工种植林）均划入"人工林"类别。"其他林地"类别只存在于 2020 年全球森林覆盖图的森林覆盖范围之外，因此未在 GFT 2020 中绘制。

用于推导协调、全球一致的森林类型表示的数据稀缺，且从地球观测数据绘制各森林类型具有挑战性。这幅全球森林类型图作为初步版本（第 0 版）发布，供关注或有兴趣于 EUDR 下森林退化问题的用户社区反馈。基于预期的反馈以及未来新增或改进的数据集，JRC 计划在 2025 年内制作一幅定稿图。

全球森林类型图 v0 合并了现有的、指示或代理四大主要森林类型的全球数据集（全覆盖或全球范围）。用于在 GFT 2020 中划定原始林的主要数据图层有：

1. 2019 年森林景观完整性指数；2. 2020 年未受干扰热带红树林图以及 1990–2020 年热带湿润森林的退化与毁林（来自 JRC-TMF）；3. 2020 年完整森林景观图；4. 世界保护区数据库；5. Sabatini 等（2021）的欧洲原始林数据集；6. 2001–2020 年全球树木覆盖损失结合全球森林损失驱动因素图；7. 全球采矿土地利用图。

绘制人工林（包括人工种植林）的主要图层有：

1. WRI 人工种植树木空间数据库（第 2.1 版）；2. IIASA 人工/人工种植林森林经营类别；3. 2019 年全球森林冠层高度数据集；4. 2000 年全球树木覆盖与 2001–2020 年损失。

全球输入图层与制图方法见[本技术报告](https://op.europa.eu/en/publication-detail/-/publication/e2c286ac-14e9-11f0-b1a3-01aa75ed71a1/language-en)。

已知问题清单请参阅[本网站](https://forobs.jrc.ec.europa.eu/GFC)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：2020 年；分辨率：10 米。
- 时间范围：2020-01-01 至 2020-12-31

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

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
var dataset = ee.ImageCollection('JRC/GFC2020_subtypes/V0');
```

- 数据集编号（Earth Engine ID）：`JRC/GFC2020_subtypes/V0`
- 提供方：Joint Research Centre, European Commission、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GFC2020_subtypes_V0

## 许可与引用

- 许可：proprietary
- 关键词：eudr, forest, forest-biomass, jrc, landcover, primary-forest
- 数据引用：Bourgoin, Clement; Verhegghen, Astrid; Carboni, Silvia; Ameztoy, Iban;
Ceccherini, Guido; Colditz, Rene; Achard, Frederic (2024): Global map
of forest types 2020 - version 0. European Commission, Joint Research Centre
(JRC) [Dataset] PID:
[http://data.europa.eu/89h/037ca376-ba92-49db-a8f7-0c277c1e5436](http://data.europa.eu/89h/037ca376-ba92-49db-a8f7-0c277c1e5436).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [EC JRC global map of forest types 2020, V1](/pages/3fb6432f/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
