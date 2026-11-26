---
title: "哥白尼全球 30 米高程模型 GLO-30（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/191e6d51/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
---

# 哥白尼全球 30 米高程模型 GLO-30（已弃用）

英文原名：Copernicus DEM GLO-30: Global 30m Digital Elevation Model [deprecated]

## 这是什么数据

Copernicus DEM 是一套数字表面模型（DSM）：它表示的是包含建筑、基础设施和植被在内的地球表面高程。它源自经过编辑的 DSM 产品 WorldDEM™，编辑包括把水体压平、让河流流向一致，还处理了岸线、海岸线、机场等特殊地物和不合理的地形结构。

WorldDEM 基于 TanDEM-X 任务获取的雷达卫星数据，该任务由德国航空航天中心（DLR）与空中客车防务及航天公司以公私合作方式出资。更多细节见数据[文档](https://dataspace.copernicus.eu/sites/default/files/media/files/2024-06/geo1988-copernicusdem-spe-002_producthandbook_i5.0.pdf)。

这套 DSM 用 EGM2008 垂直基准（[EPSG:3855](https://spatialreference.org/ref/epsg/3855/)），所以某地高程为 0 并不意味着它在平均海平面上。Earth Engine 资产由 DGED 文件摄入。注意：与 Earth Engine 里多数 DEM 不同，它是影像集合——源文件有多种分辨率，无法镶嵌成单个资产——所以算坡度时需要重投影，推荐做法见调用代码示例。本版本官方已标注弃用（deprecated）。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2010-12-01 至 2015-01-31

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DEM | 数字表面模型 | 30 |  |
| EDM | 编辑数据掩膜：标出地形与水文编辑过程中被修改过的 DEM 像元 | 30 |  |
| FLM | 填充掩膜：主要在地形编辑过程中生成 | 30 |  |
| HEM | 高程误差掩膜：以由干涉相干性和几何因素推导的标准差表示每个 DEM 像元的高程误差 | 30 |  |
| WBM | 水体掩膜：显示按海洋、湖泊、河流类别分类并编辑过的全部 DEM 像元 | 30 |  |

## 能拿来做什么

- 30 米分辨率的全球地形分析：坡度、坡向、山体阴影
- 需要水体压平、河流流向一致的水文分析
- 几乎全球陆地的制图与建模高程底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/DEM/GLO30');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/DEM/GLO30`
- 提供方：Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30

## 许可与引用

- 许可：proprietary
- 关键词：copernicus, dem, elevation, elevation-topography, geophysical
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哥白尼全球 30 米高程模型 GLO-30（2024_1）](/pages/3bdccac6/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [SRTM 高程数据第 4 版（填洞版）](/pages/81d193ff/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
