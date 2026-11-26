---
title: "欧盟 JRC 2020 年全球森林覆盖图 V2（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/e83cd6f4/
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

# 欧盟 JRC 2020 年全球森林覆盖图 V2（已弃用）

英文原名：EC JRC global map of forest cover 2020, V2 [deprecated]

## 这是什么数据

全球森林覆盖图以 10 米空间分辨率，空间明确地表示了 2020 年森林的有无。

2020 年对应欧盟"关于在欧盟市场供应以及从欧盟出口与毁林和森林退化相关的某些商品和产品"条例（EUDR，Regulation (EU) 2023/1115）的截止日期。在 EUDR 背景下，全球森林覆盖图可作为非强制性、非排他性、不具法律约束力的信息来源使用。关于该图及其使用的更多信息，见[欧盟毁林与森林退化观测站](https://forest-observatory.ec.europa.eu/forest/)（EUFO），尤其是其常见问题解答部分。

森林指面积超过 0.5 公顷、树高超过 5 米、冠层覆盖度超过 10% 的土地，或能在原地达到这些阈值的树木，但以农业或城市土地利用为主的土地除外。农业用途指将土地用于农业目的，包括农业种植园（即农业生产系统中的林分，如果园、油棕种植园、橄榄园与农林复合系统）与休耕农业用地，以及饲养牲畜。木材以外的所有相关商品种植园，即牛、可可、咖啡、油棕、橡胶、大豆，均排除在森林定义之外。

全球森林覆盖图的制作方法是：合并现有的全球空间图层（全覆盖或全球范围），如土地覆盖、土地利用与树高等图层。该图旨在表示截至 2020 年 12 月 31 日的森林覆盖状态。ESA World Cover 项目的全球土地覆盖作为基线图层之一，用于界定 2020 年 10 米空间分辨率的树木覆盖范围。2024 年，全球森林覆盖图 2020 通过整合用户反馈与新的或修订的空间数据图层得到改进。

它现在能更好地捕捉暂时无立木的森林、低密度热带森林以及至少已再生五年的次生热带森林。此外，排除标准得到加强，能更有效地排除城市区域、采矿点、湿地、轮作耕作区域与人工林中的树木。这是通过利用多幅全球冠层高度图、作物面积图与特定作物商品图，更准确地区分森林与农业用途下的树木实现的。

直接访问与元数据请查阅 JRC 数据目录（[JRC 2024](https://data.jrc.ec.europa.eu/dataset/e554d6fb-6340-45d5-9309-332337e5bc26)）。一份技术报告（[Bourgoin et al 2025](https://op.europa.eu/en/publication-detail/-/publication/e2c286ac-14e9-11f0-b1a3-01aa75ed71a1/language-en)）描述了第二版的制图方法。全球森林覆盖图的精度评估见[另一份报告](https://op.europa.eu/en/publication-detail/-/publication/e86f56dd-15b5-11f0-b1a3-01aa75ed71a1/language-en)。

如果有新的信息、更多大尺度数据图层或修订的 2020 年全球空间数据图层可用，全球森林覆盖图可能会被修订。

已知问题清单请参阅[本网站](https://forobs.jrc.ec.europa.eu/GFC)。

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
var dataset = ee.ImageCollection('JRC/GFC2020/V2');
```

- 数据集编号（Earth Engine ID）：`JRC/GFC2020/V2`
- 提供方：Joint Research Centre, European Commission、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GFC2020_V2

## 许可与引用

- 许可：proprietary
- 关键词：eudr, forest, forest-biomass, jrc
- 数据引用：Bourgoin, Clement; Verhegghen, Astrid; Degreve, Lucas; Ameztoy, Iban;
Carboni, Silvia; Colditz, Rene; Achard, Frederic (2024): Global map of
forest cover 2020 - version 2. European Commission, Joint Research
Centre (JRC) [Dataset]
PID: [http://data.europa.eu/89h/e554d6fb-6340-45d5-9309-332337e5bc26](http://data.europa.eu/89h/e554d6fb-6340-45d5-9309-332337e5bc26)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [EC JRC global map of forest cover 2020, V4](/pages/da4e266d/)
- [EC JRC global map of forest cover 2020, V1 [deprecated]](/pages/e8f1e399/)
- [EC JRC global map of forest cover 2020, V3 [deprecated]](/pages/8b874d85/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
