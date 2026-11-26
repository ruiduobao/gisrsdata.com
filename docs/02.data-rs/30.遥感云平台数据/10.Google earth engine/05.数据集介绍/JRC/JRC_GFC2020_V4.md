---
title: "欧盟 JRC 2020 年全球森林覆盖图 V4"
date: 2026-11-03 12:00:00
permalink: /pages/da4e266d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eudr"
  - "forest"
  - "forest-biomass"
  - "jrc"
---

# 欧盟 JRC 2020 年全球森林覆盖图 V4

英文原名：EC JRC global map of forest cover 2020, V4

## 这是什么数据

全球森林覆盖图以 10 米空间分辨率，空间明确地表示了 2020 年森林的有无。

2020 年对应欧盟"关于在欧盟市场供应以及从欧盟出口与毁林和森林退化相关的某些商品和产品"条例（EUDR，[Regulation (EU) 2023/1115](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115)）的截止日期。在 EUDR 背景下，全球森林覆盖图可作为非强制性、非排他性、不具法律约束力的信息来源使用。关于该图及其使用的更多信息，见[欧盟毁林与森林退化观测站](https://forest-observatory.ec.europa.eu/forest/)（EUFO）的常见问题解答部分。

森林指面积超过 0.5 公顷、树高超过 5 米、冠层覆盖度超过 10% 的土地，或能在原地达到这些阈值的树木，但以农业或城市土地利用为主的土地除外。农业用途指将土地用于农业目的，包括农业种植园（即农业生产系统中的林分，如果园、油棕种植园、橄榄园与农林复合系统）与休耕农业用地，以及饲养牲畜。木材以外的所有相关商品种植园，即牛、可可、咖啡、油棕、橡胶、大豆，均排除在森林定义之外。

工作流程第一步：整合 2020 年全球树木与红树林覆盖数据（如[哥白尼全球土地覆盖图](https://land.copernicus.eu/en/products/global-dynamic-land-cover/land-cover-2020-raster-10-m-global-annual)），识别 2020 年前后森林覆盖的最大潜在范围。此外，这一划定还使用树木覆盖与损失的历史时间序列，识别因自然干扰或森林经营活动等造成的潜在无立木森林区域。第二步：将这一最大潜在森林范围与树高、毁林、农田、农林复合及其他土地利用等多个数据图层相交。应用一系列复杂的布尔判定规则，排除按 FAO-FRA 与 EUDR 定义不属于森林的区域。

GFC 2020 第 4 版的全球输入图层、制图方法与精度将在一份单独的技术报告中描述，预计 2026 年 12 月发布。第 1、2、3 版的制图方法分别见 [Bourgoin et al. 2024](https://op.europa.eu/en/publication-detail/-/publication/f9baaa45-e73f-11ee-9ea8-01aa75ed71a1/language-en)、[2025](https://op.europa.eu/en/publication-detail/-/publication/e2c286ac-14e9-11f0-b1a3-01aa75ed71a1/language-en) 与 [2026](https://publications.jrc.ec.europa.eu/repository/handle/JRC146622)；结合物理特征与土地利用成分的森林制图总体方法见 [Bourgoin et al. 2026](https://essd.copernicus.org/articles/18/1331/2026/)。[Colditz et al. 2025](https://op.europa.eu/en/publication-detail/-/publication/e86f56dd-15b5-11f0-b1a3-01aa75ed71a1/language-en) 描述了 GFC 2020 第 2 版的精度评估规程与结果。GFC 2020 与国家图件的对比研究在科特迪瓦（[Verhegghen et al. 2024](https://op.europa.eu/en/publication-detail/-/publication/ff3a48df-7957-11ef-bbbe-01aa75ed71a1/language-en)）与泰国（[Khiripet et al. 2026](https://op.europa.eu/en/publication-detail/-/publication/6d5ed8fd-42a7-11f1-8095-01aa75ed71a1/language-en)）开展。一份用户指南解释了如何可视化 GFC2020 并与之交互以支持 EUDR 风险评估（[Simonetti et al. 2025](https://op.europa.eu/en/publication-detail/-/publication/a9ec1c5d-3780-11f0-8a44-01aa75ed71a1/language-en)）。

如果有新的信息、更多大尺度数据图层或修订的 2020 年全球空间数据图层可用，GFC 2020 图可能会被修订。

已知问题清单请参阅[本网站](https://forobs.jrc.ec.europa.eu/GFC)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：2020 年；分辨率：10 米。
- 时间范围：2020-12-31 至 2020-12-31

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Map | 2020 年全球森林覆盖。 | 10 |  |

## 能拿来做什么

- EUDR 合规与零毁林供应链核查
- 全球森林覆盖制图
- 毁林风险评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('JRC/GFC2020/V4');
```

- 数据集编号（Earth Engine ID）：`JRC/GFC2020/V4`
- 提供方：Joint Research Centre, European Commission、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GFC2020_V4

## 许可与引用

- 许可：proprietary
- 关键词：eudr, forest, forest-biomass, jrc
- 数据引用：Bourgoin, Clement; Achard, Frederic; Beuchle, Rene; Carboni, Silvia;
Carreiras, Joao; Marinelli, Daniele; Rotllan-Puig, Xavier; Simonetti, Dario;
Colditz, Rene (2026): Global map of forest cover 2020 - version 4.
European Commission, Joint Research Centre [Dataset]
[doi:10.2905/JRC.3KATEH8](https://doi.org/10.2905/JRC.3KATEH8).
PID: [https://data.europa.eu/89h/cf7c49ea-8f00-4c5a-bd40-6f25dc341580](https://data.europa.eu/89h/cf7c49ea-8f00-4c5a-bd40-6f25dc341580)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [EC JRC global map of forest cover 2020, V1 [deprecated]](/pages/e8f1e399/)
- [EC JRC global map of forest cover 2020, V2 [deprecated]](/pages/e83cd6f4/)
- [EC JRC global map of forest cover 2020, V3 [deprecated]](/pages/8b874d85/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
