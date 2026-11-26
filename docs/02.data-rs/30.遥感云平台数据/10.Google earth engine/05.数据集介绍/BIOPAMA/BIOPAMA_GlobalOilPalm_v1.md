---
title: "全球油棕种植图 2019（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/1dc500dd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "biodiversity"
  - "biopama"
  - "conservation"
  - "crop"
  - "global"
  - "landuse"
  - "palm"
  - "plantation"
---

# 全球油棕种植图 2019（已弃用）

英文原名：Global Map of Oil Palm Plantations [deprecated]

## 这是什么数据

这是一幅 2019 年的全球油棕种植图，分辨率 10 米，标出全球检出的工业种植园和小型农户种植园分布。

分类结果来自卷积神经网络对 Sentinel-1 与 Sentinel-2 半年合成影像的解译。更多信息见[论文](https://essd.copernicus.org/articles/13/1211/2021/)。注意：该版本官方已标注弃用（deprecated）。

## 覆盖范围与时间

- 覆盖范围：全球油棕种植区
- 时间范围：2019-01-01 至 2019-12-31

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | 油棕类别 | 10 |  |

## 能拿来做什么

- 查看全球工业与小农油棕种植园的分布
- 评估油棕扩张带来的毁林风险
- 做土地利用与供应链研究的 2019 年基准图层

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('BIOPAMA/GlobalOilPalm/v1');
```

- 数据集编号（Earth Engine ID）：`BIOPAMA/GlobalOilPalm/v1`
- 提供方：Biopama programme、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：agriculture, biodiversity, biopama, conservation, crop, global, landuse, palm, plantation
- 数据引用：Adrià, D., Serge, W., Erik, M., David, G., Stephen, P., & Zoltan, S. (2021). High resolution global industrial and smallholder oil palm map for 2019 (Version v1) [Data set]. Zenodo.
[doi:10.5281/zenodo.4473715](https://doi.org/10.5281/zenodo.4473715)

- DOI：10.5281/zenodo.4473715

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)
- [加拿大年度作物种植清单（AAFC）](/pages/ad6873e3/)
- [哥白尼全球土地覆盖 LC100 第 3 集合（100 米）](/pages/ab21afa1/)
- [欧洲 CORINE 土地覆盖 V20](/pages/a9db0306/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
