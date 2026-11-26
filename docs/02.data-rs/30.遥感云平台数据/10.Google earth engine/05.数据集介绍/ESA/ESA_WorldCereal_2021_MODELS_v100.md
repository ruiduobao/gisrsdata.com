---
title: "ESA WorldCereal 10 米 v100"
date: 2026-11-03 12:00:00
permalink: /pages/76b102d2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "copernicus"
  - "crop"
  - "esa"
  - "global"
  - "landcover"
  - "landsat"
  - "sentinel1-derived"
  - "sentinel2-derived"
---

# ESA WorldCereal 10 米 v100

英文原名：ESA WorldCereal 10 m v100

## 这是什么数据

欧洲空间局（ESA）WorldCereal 10 米 2021 产品套件由全球尺度的年度与季节性作物地图及其置信度组成。它们在 [ESA-WorldCereal 项目](https://esa-worldcereal.org/)下生成。这些产品的内容与生成方法的更多信息见 [1]。

本集合每个产品包含多达 106 幅农业生态区（AEZ）影像，全部按各自的区域季节性处理，应视为独立产品。这些季节在下表中说明，由 [2] 在项目中开发。注意，WorldCereal 所述的谷物包括小麦、大麦与黑麦，它们属于小麦族（*Triticeae*）。

WorldCereal 季节说明：

- tc-annual：一个 AEZ 中以所考虑的最后一个生长季节结束为界定义的一年周期
- tc-wintercereals：一个 AEZ 中定义的主要谷物季节
- tc-springcereals：可选的春谷物季节，仅在某些 AEZ 中定义
- tc-maize-main：一个 AEZ 中定义的主要玉米季节
- tc-maize-second：可选的第二玉米季节，仅在某些 AEZ 中定义

本集合中可用的产品有：

- temporarycrops（临时作物）
- maize（玉米）
- wintercereals（冬谷物）
- springcereals（春谷物）
- irrigation（灌溉）

每个产品（影像）有一个二值分类（0 或 100）波段与一个置信度（0–100）波段。注意，没有灌溉产品的 AEZ 未被处理，原因是缺乏热红外 Landsat 数据。

应使用以下一个或多个影像属性过滤本集合：

- aez_id，保存影像所属 AEZ 的 ID
- product，描述影像的 WorldCereal 产品名称
- season，描述影像有效的季节。

WorldCereal 数据集：
- 2021 年第 100 版
- [ESA/WorldCereal/AEZ/v100](ESA_WorldCereal_AEZ_v100)
- [ESA/WorldCereal/2021/MODELS/v100](ESA_WorldCereal_2021_MODELS_v100)
- [ESA/WorldCereal/2021/MARKERS/v100](ESA_WorldCereal_2021_MARKERS_v100)

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2020-01-01 至 2021-12-31

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | 分类：0 或 100 | 10 |  |
| confidence | 置信度，0 到 100 | 10 |  |

## 能拿来做什么

- 全球作物类型制图（玉米、冬/春谷物、灌溉）
- 耕地与灌溉面积统计
- 农业监测与粮食安全评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ESA/WorldCereal/2021/MODELS/v100');
```

- 数据集编号（Earth Engine ID）：`ESA/WorldCereal/2021/MODELS/v100`
- 提供方：ESA WorldCereal Consortium、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCereal_2021_MODELS_v100
- [1] [WorldCereal methodology and products paper](https://doi.org/10.5194/essd-2023-184)
- [2] [WorldCereal global seasonality paper](https://doi.org/10.1080/15481603.2022.2079273)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：agriculture, copernicus, crop, esa, global, landcover, landsat, sentinel1-derived, sentinel2-derived
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

- [ESA WorldCereal Active Cropland 10 m v100](/pages/dd6f101f/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [世界居住区足迹 2015（WSF 2015）](/pages/a545a891/)
- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
