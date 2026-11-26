---
title: "ESA WorldCereal 农业生态区（AEZ）v100"
date: 2026-11-03 12:00:00
permalink: /pages/1c72ec66/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "boundaries"
  - "crop"
  - "esa"
  - "global"
  - "table"
---

# ESA WorldCereal 农业生态区（AEZ）v100

英文原名：ESA WorldCereal AEZ v100

## 这是什么数据

[欧洲空间局（ESA）WorldCereal](https://esa-worldcereal.org/) 分类系统的目标是在特定生长季节结束后一个月内生成产品。由于全球各地生长季节的动态性质，项目基于项目内创建的全球作物日历 [1]，将全球分层为农业生态区（AEZ）。本数据集的要素集合包含已生成 WorldCereal 产品的 106 个 AEZ。每个 AEZ 有独特的作物日历，以季节开始（SOS）与季节结束（EOS）描述。SOS 与 EOS 以年内日序（DOY）给出。AEZ 分层与后续 WorldCereal 产品生成的更多信息见 [2]。

AEZ 属性：

- aez_id：每个 AEZ 的唯一 ID。WorldCereal 产品可基于此 ID 过滤
- aez_groupid：组 ID，基于作物日历相似性将多个唯一 AEZ 合并为一组。
- tc-annual_sos：tc-annual 季节的 SOS（DOY）
- tc-annual_eos：tc-annual 季节的 EOS（DOY）
- tc-wintercereals_sos：tc-wintercereals 季节的 SOS（DOY）
- tc-wintercereals_eos：tc-wintercereals 季节的 EOS（DOY）
- tc-springcereals_sos：tc-springcereals 季节的 SOS（DOY）
- tc-springcereals_eos：tc-springcereals 季节的 EOS（DOY）
- tc-maize-main_sos：tc-maize-main 季节的 SOS（DOY）
- tc-maize-main_eos：tc-maize-main 季节的 EOS（DOY）
- tc-maize-second_sos：tc-maize-second 季节的 SOS（DOY）
- tc-maize-second_eos：tc-maize-second 季节的 EOS（DOY）

SOS 与 EOS 的缺失值表示相应生长季节在特定 AEZ 中不存在。

WorldCereal 数据集：
- 2021 年第 100 版
- [ESA/WorldCereal/AEZ/v100](ESA_WorldCereal_AEZ_v100)
- [ESA/WorldCereal/2021/MODELS/v100](ESA_WorldCereal_2021_MODELS_v100)
- [ESA/WorldCereal/2021/MARKERS/v100](ESA_WorldCereal_2021_MARKERS_v100)

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2020-01-01 至 2022-01-01

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| aez_id | INT | AEZ 的唯一 ID |
| aez_groupid | INT | 组 ID，基于作物日历相似性将多个唯一 AEZ 合并为一组 |
| tc-annual_sos | INT | tc-annual 季节的 SOS（DOY） |
| tc-annual_eos | INT | tc-annual 季节的 EOS（DOY） |
| tc-wintercereals_sos | INT | tc-wintercereals 季节的 SOS（DOY） |
| tc-wintercereals_eos | INT | tc-wintercereals 季节的 EOS（DOY） |
| tc-springcereals_sos | INT | tc-springcereals 季节的 SOS（DOY） |
| tc-springcereals_eos | INT | tc-springcereals 季节的 EOS（DOY） |
| tc-maize-main_sos | INT | tc-maize-main 季节的 SOS（DOY） |
| tc-maize-main_eos | INT | tc-maize-main 季节的 EOS（DOY） |
| tc-maize-second_sos | INT | tc-maize-second 季节的 SOS（DOY） |
| tc-maize-second_eos | INT | tc-maize-second 季节的 EOS（DOY） |

## 能拿来做什么

- 按农业生态区组织作物制图
- 作物日历（SOS/EOS）查询
- WorldCereal 产品的区域过滤

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('ESA/WorldCereal/AEZ/v100');
```

- 数据集编号（Earth Engine ID）：`ESA/WorldCereal/AEZ/v100`
- 提供方：ESA WorldCereal Consortium、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCereal_AEZ_v100
- [1] [WorldCereal global seasonality paper](https://doi.org/10.1080/15481603.2022.2079273)
- [2] [WorldCereal methodology and products paper](https://doi.org/10.5194/essd-2023-184)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：agriculture, boundaries, crop, esa, global, table
- 数据引用：Van Tricht, K., Degerickx, J., Gilliams, S., Zanaga, D., Battude, M., Grosu,
A., Brombacher, J., Lesiv, M., Bayas, J. C. L., Karanam, S., Fritz, S.,
Becker-Reshef, I., Franch, B., Mollà-Bononad, B., Boogaard, H., Pratihast,
A. K., and Szantoi, Z.: WorldCereal: a dynamic open-source system for
global-scale, seasonal, and reproducible crop and irrigation mapping, Earth
Syst. Sci. Data Discuss. [preprint],
[doi:10.5194/essd-2023-184](https://doi.org/10.5194/essd-2023-184), in
review, 2023.,

- DOI：10.5194/essd-2023-184

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [1比100万基础地理信息](/pages/ee94f8/)
- [Designation: USGS GAP PAD-US v2.0](/pages/3a617def/)
- [Easement: USGS GAP PAD-US v2.0](/pages/3311e509/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Country Boundaries](/pages/6acf3380/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
