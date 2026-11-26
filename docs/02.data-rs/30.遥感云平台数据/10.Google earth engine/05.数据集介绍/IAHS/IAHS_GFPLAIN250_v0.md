---
title: "GFPLAIN250 米：全球 250 米洪泛区数据集"
date: 2026-11-03 12:00:00
permalink: /pages/fcae03ea/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "flood"
  - "monitoring"
  - "surface-ground-water"
---

# GFPLAIN250 米：全球 250 米洪泛区数据集

英文原名：GFPLAIN250m: Global 250m Floodplain Dataset

## 这是什么数据

GFPLAIN250m 包含使用 Nardi 等（2006，2018）提出的地貌学方法识别出的地球洪泛区栅格数据。250 米洪泛区数据集通过处理 NASA SRTM 数字高程模型制作，该模型收集自 [http://srtm.csi.cgiar.org/](http://srtm.csi.cgiar.org/)，特别是 250 米 SRTM 4.1 版 DTM。每个大陆使用的编码和更多信息详见 GFPLAIN250m 数据仓库中包含的元数据。

高程数据由一个快速的洪泛区制图地理空间工具处理，该工具可从 [https://github.com/fnardi/GFPLAIN](https://github.com/fnardi/GFPLAIN) 下载。该工具首先预处理 DEM 以推导水文特征（填洼 DEM、流向、汇流累积、河网），然后计算洪泛区范围。

该数据集适用于由水驱动的侵蚀和沉积过程主导洪泛区景观特征形态的地区，不包括水分可用性低的沙漠和河流流量微不足道的冰雪覆盖地区。它适用于汇水面积大于 1000 平方公里的流域。GFPLAIN250m 数据集可与全球人类住区数据集结合使用，以支持人类-洪水相互作用、人类对河流的压力，以及面临风险的洪泛区和湿地栖息地随时间变化的大尺度研究。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2018-11-11 至 2018-11-12

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| flood | 洪泛区 | 250 |  |

## 能拿来做什么

- 洪泛区范围制图
- 人类-洪水相互作用研究
- 洪水风险评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('IAHS/GFPLAIN250/v0');
```

- 数据集编号（Earth Engine ID）：`IAHS/GFPLAIN250/v0`
- 提供方：IAHS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IAHS_GFPLAIN250_v0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：flood, monitoring, surface-ground-water
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GLCF：Landsat 全球内陆水体](/pages/500a347f/)
- [全球网格人口 GPWv4.11：水体掩膜](/pages/d70c6d97/)
- [全球网格人口 GPWv4.11：水域面积](/pages/0f13e587/)
- [美国 BLM 土地健康野外样地数据（AIM TerrADat）](/pages/53c74382/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
