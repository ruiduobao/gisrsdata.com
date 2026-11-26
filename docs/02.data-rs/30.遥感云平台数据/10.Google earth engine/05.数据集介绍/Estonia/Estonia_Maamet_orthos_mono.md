---
title: "爱沙尼亚单色正射影像"
date: 2026-11-03 12:00:00
permalink: /pages/baca66e9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "estonia"
  - "orthophotos"
---

# 爱沙尼亚单色正射影像

英文原名：Estonia mono orthophotos

## 这是什么数据

正射影像是覆盖爱沙尼亚的航空照片数据集。

正射影像是经过处理的航空照片，已去除由地形起伏、曝光瞬间相机相对于地面的倾斜以及相机中心投影引起的畸变。数字正射影像有一定的像元大小或分辨率，表示地面上最小不可分割的曝光区域（地面采样距离，GSD）。

正射影像覆盖全国，对应 1:5000–1:10000 比例尺（像元大小 20–40 厘米）。人口密集区的正射影像以 10–16 厘米的像元大小制作。

mono 数据集有一个灰度波段，覆盖全国。

更多信息见[爱沙尼亚正射影像文档](https://geoportaal.maaamet.ee/eng/Spatial-Data/Orthophotos-p309.html)。

## 覆盖范围与时间

- 覆盖范围：爱沙尼亚全国
- 时间范围：1993-01-01 至 2021-06-16

## 分辨率与规格

- 空间分辨率：约 0.4 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| mono | 灰度 | 0.4 |  |

## 能拿来做什么

- 高分辨率航空影像底图
- 城市与土地利用精细制图
- 历史影像对比（1993 年起）

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Estonia/Maamet/orthos/mono');
```

- 数据集编号（Earth Engine ID）：`Estonia/Maamet/orthos/mono`
- 提供方：Estonia orthophotos、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Estonia_Maamet_orthos_mono

## 许可与引用

- 许可：proprietary
- 关键词：estonia, orthophotos
- 数据引用：Map data: Estonian Land Board

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Estonia RGB low flying orthophotos](/pages/e528fe2f/)
- [Estonia RGB orthophotos](/pages/65b015a5/)
- [Estonia mono low flying orthophotos](/pages/ddf5edfa/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
