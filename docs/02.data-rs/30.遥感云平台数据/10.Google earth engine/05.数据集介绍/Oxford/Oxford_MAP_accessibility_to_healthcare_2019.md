---
title: "到医疗设施的可达性 2019 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/5a6f325a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "accessibility"
  - "jrc"
  - "map"
  - "oxford"
  - "population"
  - "twente"
---

# 到医疗设施的可达性 2019 [已弃用]

英文原名：Accessibility to Healthcare 2019 [deprecated]

## 这是什么数据

本全球可达性地图列出名义年份 2019 年北纬 85 度至南纬 60 度之间所有区域到最近医院或诊所的陆上旅行时间（分钟）。它还包括仅使用非机动交通工具的「仅步行」旅行时间。

OpenStreetMap、Google Maps 与学术研究人员正在进行的大型数据收集工作被汇集起来，编成迄今最完整的医疗设施位置集合。本地图由 MAP（牛津大学）、Telethon 儿童研究所（澳大利亚珀斯）、Google 与荷兰特温特大学合作制作。

本项目建立在 Weiss 等 2018 年发表的先前工作（[doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)）基础上。Weiss 等（2018）使用了道路（包括 Open Street Map 与 Google 道路数据集的首次全球尺度使用）、铁路、河流、湖泊、海洋、地形条件（坡度与高程）、土地覆盖类型与国界数据集。这些数据集各被分配一个或多个旅行速度（以穿越该类型每个像元的时间计）。随后将数据集组合生成「摩擦面」：一幅每个像元按像元内出现的类型分配名义总体旅行速度的地图。本项目创建了更新的摩擦面，以纳入 OSM 道路数据的最新改进。

最小成本路径算法（在 Google Earth Engine 中运行，高纬地区在 R 中运行）结合此摩擦面计算从所有位置到最近（时间上）医疗设施的旅行时间。医疗设施数据集使用了两个最大的全球数据库的位置数据：（1）在 [www.healthsites.io](https://www.healthsites.io/) 汇集并可下载的 OSM 数据；（2）从 Google Maps 提取的数据。全球数据集还补充了最近为非洲与澳大利亚发布的大陆尺度设施位置。为便于数据源间比较，只使用定义为医院与诊所的设施。同一像元内的多个点被合并，以匹配所选地球表面格网表示定义的分析分辨率。因此，可达性地图中的每个像元代表从该位置到医院或诊所的建模最短时间（分钟）。

源数据集的致谢见随附论文。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地（85°N–60°S）；时间：2019 年；分辨率：927.67 米。
- 时间范围：2019-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| accessibility | 到最近医院或诊所的旅行时间。 | 927.67 |  |
| accessibility_walking_only | 仅使用非机动交通到最近医院或诊所的旅行时间。 | 927.67 |  |

## 能拿来做什么

- 评估医疗服务可达性与公平性。
- 为卫生设施选址与应急规划提供依据。
- 分析弱势人群的就医旅行时间。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('Oxford/MAP/accessibility_to_healthcare_2019');
```

- 数据集编号（Earth Engine ID）：`Oxford/MAP/accessibility_to_healthcare_2019`
- 提供方：Malaria Atlas Project、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_accessibility_to_healthcare_2019

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：accessibility, jrc, map, oxford, population, twente
- 数据引用：D.J. Weiss, A. Nelson, C.A. Vargas-Ruiz, K. Gligori&cacute;, S. Bavadekar,
E. Gabrilovich, A. Bertozzi-Villa, J. Rozier, H.S. Gibson, T. Shekel,
C. Kamath, A. Lieber, K. Schulman, Y. Shao, V. Qarkaxhija, A.K. Nandi,
S.H. Keddie, S. Rumisha, E. Cameron, K.E. Battle, S. Bhatt, P.W. Gething.
Global maps of travel time to healthcare facilities. Nature Medicine (2020).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Accessibility to Cities 2015 [deprecated]](/pages/17a7017f/)
- [Global Friction Surface 2015 [deprecated]](/pages/b510ae4f/)
- [Global Friction Surface 2019 [deprecated]](/pages/67001827/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
