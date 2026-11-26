---
title: "德国勃兰登堡 RGBN 正射影像 20 厘米"
date: 2026-11-03 12:00:00
permalink: /pages/d15dcdc4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brandenburg"
  - "germany"
  - "orthophotos"
  - "rgbn"
---

# 德国勃兰登堡 RGBN 正射影像 20 厘米

英文原名：Brandenburg (Germany) RGBN orthophotos 20 cm

## 这是什么数据

正射影像是覆盖德国勃兰登堡州的航空照片数据集。该数据由勃兰登堡州政府（[LGB](https://geobasis-bb.de/lgb/de/)）提供。数字正射影像是经数字校正的航空照片，以平行透视显示记录时从空中可见的所有物体。它们在生态、物候、地理和其他主题上具有很高的信息密度。

更多信息见[勃兰登堡正射影像文档](https://geobasis-bb.de/lgb/de/geodaten/luftbilder/luftbilder-aktuell/)。

## 覆盖范围与时间

- 覆盖范围：德国勃兰登堡州
- 时间范围：2021-08-23 至 2023-01-20

## 分辨率与规格

- 空间分辨率：约 0.2 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| N | 近红外 | 0.2 |  |
| R | 红光 | 0.2 |  |
| G | 绿光 | 0.2 |  |
| B | 蓝光 | 0.2 |  |

## 能拿来做什么

- 高精度地物判读
- 城市与土地利用制图
- 生态与物候监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Germany/Brandenburg/orthos/20cm');
```

- 数据集编号（Earth Engine ID）：`Germany/Brandenburg/orthos/20cm`
- 提供方：Brandenburg orthophotos、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Germany_Brandenburg_orthos_20cm

## 许可与引用

- 许可：proprietary
- 关键词：brandenburg, germany, orthophotos, rgbn
- 数据引用：Data License Germany - Attribution - Version 2.0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [EO-1 Hyperion 高光谱成像仪](/pages/9f815cd7/)
- [Landsat 8 二级地表反射率与地表温度数据](/pages/778e3960/)
- [全球季节性 Sentinel-1 干涉相干性与后向散射 V2019：入射角与叠掩阴影](/pages/008235d0/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
