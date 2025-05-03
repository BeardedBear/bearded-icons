/**
 * TypeScript script to optimize all SVG files in the icons folder
 * Uses SVGO for optimization
 */

import chalk from "chalk";
import fs from "fs";
import { globby } from "globby";
import path from "path";
import { Config, optimize, Output } from "svgo";

// Type definitions
interface OptimizationResult {
  filePath: string;
  relativePath: string;
  sizeBefore: number;
  sizeAfter: number;
  reduction: number;
  success: boolean;
  error?: Error;
}

interface OptimizationSummary {
  totalFiles: number;
  filesOptimized: number;
  errors: number;
  totalSizeBefore: number;
  totalSizeAfter: number;
  totalReduction: number;
}

// Paths
const ICONS_DIR = path.resolve(__dirname, "..", "icons");
const SVG_FILES_PATTERN = "**/*.svg";

// SVGO Configuration
const svgoConfig: Config = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Keep the viewBox attribute
          removeViewBox: false,
          // Disable cleanupIds which was causing warnings (note the lowercase 'i')
          cleanupIds: false,
        },
      },
    },
    // Additional plugins
  ],
};

/**
 * Optimizes an SVG file
 * @param filePath Path to the file to optimize
 * @returns Optimization result
 */
async function optimizeSvgFile(filePath: string): Promise<OptimizationResult> {
  try {
    const relativePath = path.relative(process.cwd(), filePath);
    const svgContent = fs.readFileSync(filePath, "utf8");
    const sizeBefore = Buffer.byteLength(svgContent, "utf8");

    // Optimize the SVG content
    const optimizedSvg = optimize(svgContent, {
      path: filePath,
      ...svgoConfig,
    }) as Output;

    // Calculate size reduction
    const sizeAfter = Buffer.byteLength(optimizedSvg.data, "utf8");
    const reduction = (1 - sizeAfter / sizeBefore) * 100;

    // Save the optimized file
    fs.writeFileSync(filePath, optimizedSvg.data);

    return {
      filePath,
      relativePath,
      sizeBefore,
      sizeAfter,
      reduction,
      success: true,
    };
  } catch (error) {
    return {
      filePath,
      relativePath: path.relative(process.cwd(), filePath),
      sizeBefore: 0,
      sizeAfter: 0,
      reduction: 0,
      success: false,
      error: error as Error,
    };
  }
}

/**
 * Main function to optimize SVG files
 */
async function optimizeSvgFiles(): Promise<void> {
  console.log(chalk.cyan(`Searching for SVG files in: ${ICONS_DIR}`));

  try {
    // Find all SVG files
    const svgFiles = await globby(SVG_FILES_PATTERN, {
      cwd: ICONS_DIR,
      absolute: true,
    });

    console.log(chalk.cyan(`Found ${svgFiles.length} SVG files to optimize`));

    if (svgFiles.length === 0) {
      console.log(chalk.yellow("No SVG files found. Check the file path."));
      return;
    }

    const summary: OptimizationSummary = {
      totalFiles: svgFiles.length,
      filesOptimized: 0,
      errors: 0,
      totalSizeBefore: 0,
      totalSizeAfter: 0,
      totalReduction: 0,
    };

    // Process each SVG file
    for (const filePath of svgFiles) {
      const result = await optimizeSvgFile(filePath);

      if (result.success) {
        summary.filesOptimized += 1;
        summary.totalSizeBefore += result.sizeBefore;
        summary.totalSizeAfter += result.sizeAfter;

        console.log(
          `${chalk.green("✅")} ${result.relativePath} - ${chalk.bold(result.reduction.toFixed(2) + "%")} reduction`,
        );
      } else {
        summary.errors += 1;
        console.error(`${chalk.red("❌")} Optimization error ${result.relativePath}: ${result.error?.message}`);
      }
    }

    // Calculate total reduction
    if (summary.filesOptimized > 0) {
      summary.totalReduction = (1 - summary.totalSizeAfter / summary.totalSizeBefore) * 100;
      printSummary(summary);
    } else {
      console.log(chalk.yellow("\nNo files were optimized. Check the SVG file paths."));
    }
  } catch (error) {
    console.error(chalk.red("Error during optimization:"), error);
    process.exit(1);
  }
}

/**
 * Display the optimization summary
 * @param summary Optimization summary
 */
function printSummary(summary: OptimizationSummary): void {
  console.log(chalk.cyan("\nOptimization Summary:"));
  console.log(`Files processed: ${chalk.bold(summary.totalFiles.toString())}`);
  console.log(`Files optimized: ${chalk.bold(summary.filesOptimized.toString())}`);
  console.log(`Errors encountered: ${chalk.bold(summary.errors.toString())}`);
  console.log(`Size before: ${chalk.bold((summary.totalSizeBefore / 1024).toFixed(2) + " KB")}`);
  console.log(`Size after: ${chalk.bold((summary.totalSizeAfter / 1024).toFixed(2) + " KB")}`);
  console.log(`Total reduction: ${chalk.bold.green(summary.totalReduction.toFixed(2) + "%")}`);
}

// Execute the main function
optimizeSvgFiles().catch((error) => {
  console.error(chalk.red("Error during optimization:"), error);
  process.exit(1);
});
