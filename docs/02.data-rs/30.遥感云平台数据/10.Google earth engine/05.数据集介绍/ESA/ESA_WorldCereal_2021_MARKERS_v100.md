---
title: "ESA WorldCereal 活跃耕地 10 米 v100"
date: 2026-11-03 12:00:00
permalink: /pages/dd6f101f/
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

# ESA WorldCereal 活跃耕地 10 米 v100

英文原名：ESA WorldCereal Active Cropland 10 m v100

## 这是什么数据

欧洲空间局（ESA）WorldCereal 活跃耕地 10 米 2021 产品套件包含全球尺度的季节性活跃耕地标记。它们在 [ESA-WorldCereal 项目](https://esa-worldcereal.org/)下生成。活跃耕地产品指示：一个被识别为临时作物的像元，在特定生长季节内是否被积极耕作。要使一个像元在某个生长季节被标为「活跃」，在指定时段内需要发生一个完整的作物生长周期（播种、生长、衰老与收获）。注意，该活跃标记不区分作物类型。任何在预定义生长季节（略微）之外种植的作物，都不会在 WorldCereal 系统覆盖的任何季节中被标记为活跃耕地。该活跃标记由在 Sentinel-2 导出的增强植被指数（EVI）上运行生长季节检测算法 [1] 得到。生成这些产品所用方法的更多信息见 [2]。

本集合每个作物季节包含多达 106 幅农业生态区（AEZ）影像，其中每个 AEZ 有其自己的季节性。活跃耕地标记可用的季节在下表中说明，由 [3] 在项目中开发。

WorldCereal 季节说明：

- tc-wintercereals：一个 AEZ 中定义的主要谷物季节
- tc-springcereals：可选的春谷物季节，仅在某些 AEZ 中定义
- tc-maize-main：一个 AEZ 中定义的主要玉米季节
- tc-maize-second：可选的第二玉米季节，仅在某些 AEZ 中定义

每个产品（影像）有一个二值分类波段，其中值 0 对应非活跃耕地、值 100 对应活跃耕地。

应使用以下一个或多个影像属性过滤本集合：

- aez_id，保存影像所属 AEZ 的 ID
- season，描述影像有效的季节。

参考文献：

- [1] Bolton, D. K.、Gray, J. M.、Melaas, E. K.、Moon, M.、Eklundh, L. 与 Friedl, M. A.：Continental-scale land surface phenology from harmonized Landsat 8 and Sentinel-2 imagery, Remote Sens. Environ., 240, 111685, https://doi.org/10.1016/j.rse.2020.111685, 2020。
- [2] [WorldCereal 方法与产品论文](https://doi.org/10.5194/essd-2023-184)
- [3] [WorldCereal 全球季节性论文](https://doi.org/10.1080/15481603.2022.2079273)

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

## 能拿来做什么

- 季节性活跃耕地识别
- 全球耕地利用强度监测
- 粮食安全与作物面积估算

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ESA/WorldCereal/2021/MARKERS/v100');
```

- 数据集编号（Earth Engine ID）：`ESA/WorldCereal/2021/MARKERS/v100`
- 提供方：ESA WorldCereal Consortium、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCereal_2021_MARKERS_v100

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

- [ESA WorldCereal 10 m v100](/pages/76b102d2/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [世界居住区足迹 2015（WSF 2015）](/pages/a545a891/)
- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
