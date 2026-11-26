---
title: "欧盟 JRC 2020 年全球森林覆盖图 V1（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/e8f1e399/
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

# 欧盟 JRC 2020 年全球森林覆盖图 V1（已弃用）

英文原名：EC JRC global map of forest cover 2020, V1 [deprecated]

## 这是什么数据

欧盟委员会联合研究中心（EC JRC）全球森林覆盖图以 10 米空间分辨率，空间明确地表示了 2020 年森林的有无。

2020 年对应欧盟"关于在欧盟市场供应以及从欧盟出口与毁林和森林退化相关的某些商品和产品"条例（EUDR，[Regulation (EU) 2023/1115](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115)）的截止日期。在 EUDR 背景下，全球森林覆盖图可作为非强制性、非排他性、不具法律约束力的信息来源使用。关于该图及其使用的更多信息，见[欧盟毁林与森林退化观测站](https://forest-observatory.ec.europa.eu/forest/)（EUFO）的常见问题解答部分。

森林指面积超过 0.5 公顷、树高超过 5 米、冠层覆盖度超过 10% 的土地，或能在原地达到这些阈值的树木，但以农业或城市土地利用为主的土地除外。农业用途指将土地用于农业目的，包括农业种植园（即农业生产系统中的林分，如果园、油棕种植园、橄榄园与农林复合系统）与休耕农业用地，以及饲养牲畜。木材以外的所有相关商品种植园，即牛、可可、咖啡、油棕、橡胶、大豆，均排除在森林定义之外。

全球森林覆盖图的制作方法是：把现有的树木覆盖、树高、土地覆盖与土地利用全球数据集（全覆盖或全球范围）合并为单一、协调、全球一致的 2020 年森林分布表示。

工作流程第一步：结合 ESA World Cover 2020 与 2021、WRI Tropical Tree Cover 2020、UMD Global land cover and land use 2019、Global Mangrove Watch 2020 与 JRC Tropical Moist Forest 2020 数据集，绘制 2020 年前后全球树木覆盖的最大范围。第二步：应用一系列叠加与判定规则，使用涵盖农田与商品扩张（ESA World Cereal、UMD Global land cover and land use 2019、UMD Global Cropland Expansion、High-resolution global map of smallholder and industrial oil palm plantations、WRI Spatial Database of Planted Trees）、土地利用变化（UMD global forest cover loss、JRC Tropical Moist Forest、IIASA Global Forest Management）、建成区（JRC Global Human Settlement）与水体（JRC Global Surface Water）的数据集，缩减这一最大树木覆盖范围并使其与森林定义对齐。

全球输入图层、制图方法与初步精度评估见一份 [JRC science for policy report](https://op.europa.eu/en/publication-detail/-/publication/f9baaa45-e73f-11ee-9ea8-01aa75ed71a1)。JRC 将在 2024 年开展一次正式的、统计与主题上稳健的精度评估。

另请参阅[已知问题清单](https://forobs.jrc.ec.europa.eu/GFC)与 [JRC 数据目录条目](https://data.jrc.ec.europa.eu/dataset/10d1b337-b7d1-4938-a048-686c8185b290)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：2020 年；分辨率：10 米。
- 时间范围：2020-12-31 至 2020-12-31

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

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
var dataset = ee.ImageCollection('JRC/GFC2020/V1');
```

- 数据集编号（Earth Engine ID）：`JRC/GFC2020/V1`
- 提供方：Joint Research Centre, European Commission、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GFC2020_V1

## 许可与引用

- 许可：proprietary
- 关键词：eudr, forest, forest-biomass, jrc
- 数据引用：Bourgoin, Clement; Ameztoy, Iban; Verhegghen, Astrid; Carboni, Silvia;
Colditz, Rene R.; Achard, Frederic (2023): Global map of forest cover 2020 -
version 1. European Commission, Joint Research Centre (JRC) [Dataset] PID:
[http://data.europa.eu/89h/10d1b337-b7d1-4938-a048-686c8185b290](http://data.europa.eu/89h/10d1b337-b7d1-4938-a048-686c8185b290).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [EC JRC global map of forest cover 2020, V4](/pages/da4e266d/)
- [EC JRC global map of forest cover 2020, V2 [deprecated]](/pages/e83cd6f4/)
- [EC JRC global map of forest cover 2020, V3 [deprecated]](/pages/8b874d85/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
