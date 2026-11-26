---
title: "加拿大年度作物种植清单（AAFC）"
date: 2026-11-03 12:00:00
permalink: /pages/ad6873e3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aafc"
  - "agriculture"
  - "canada"
  - "crop"
  - "landcover"
---

# 加拿大年度作物种植清单（AAFC）

英文原名：Canada AAFC Annual Crop Inventory

## 这是什么数据

这是一套逐年绘制的加拿大「种地地图」：哪块地种了什么作物，一年更新一幅。从 2009 年起，加拿大农业与农业食品部（AAFC）科技分局的对地观测团队开始制作这套作物类型数字地图。

最初两年（2009、2010）只覆盖草原三省，用 Landsat-5、AWiFS、DMC 等光学影像加上 Radarsat-2 雷达影像、按决策树方法分类；从 2011 年种植季起扩展到其他省份，支撑全国作物清单。这套分类的总体精度目标不低于 85%，最终空间分辨率 30 米（2009、2010 年为 56 米）。

## 覆盖范围与时间

- 覆盖范围：加拿大（2009–2010 年为草原三省，其后扩展至其他省份）
- 时间范围：2009-01-01 至 2025-01-01
- 更新节奏：每年一幅

## 分辨率与规格

- 空间分辨率：约 30 米（一个像元约 30 米见方；2009、2010 年为 56 米）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | 主要作物类型土地覆盖分类 | 30 |  |

## 能拿来做什么

- 查看各地区每年种了什么作物，统计各类作物的种植面积与变化
- 给农业政策、产量估算与粮食安全分析提供底图
- 研究土地利用与轮作的长期变化

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('AAFC/ACI');
```

- 数据集编号（Earth Engine ID）：`AAFC/ACI`
- 提供方：Agriculture and Agri-Food Canada、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AAFC_ACI

## 许可与引用

- 许可：OGL-Canada-2.0
- 关键词：aafc, agriculture, canada, crop, landcover
- 数据引用：Agriculture and Agri-Food Canada Annual Crop Inventory. {YEAR}

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)
- [哥白尼全球土地覆盖 LC100 第 3 集合（100 米）](/pages/ab21afa1/)
- [欧洲 CORINE 土地覆盖 V20](/pages/a9db0306/)
- [科特迪瓦 2020 年土地覆盖图（BNETD）](/pages/ede6637e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
